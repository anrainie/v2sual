<template>
  <div class="dialogWindow">
    <el-row class="chat">
      <div class="dialog" v-for="(dialog,index) of dialogs" :key="index">
        <span class="message" :class="dialogClass(dialog)">
          <pre>{{dialog.msg}}</pre>
        </span>
      </div>
    </el-row>
    <el-row>
      <el-col :span="15">
        <el-input v-model="input" size="mini" @keyup.native.enter="sendIntent"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button
          :type="this.recording?'success':'warning'"
          size="mini"
          class="el-icon-service recorder"
          :class="recordClass"
          @click="record"
        ></el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="sendIntent" size="mini" @keyup.13="sendIntent">发送</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recording: false,
      audio_context: null,
      result: null,
      handling: false,
      session_id: null,
      state: 0,
      dialogs: [],
      intents: [],
      intent: null,
      input:null,
    };
  },
  methods: {
    record() {
      if (this.recording) {
        this.stopRecord();
      } else {
        this.startRecord();
      }
      this.recording = !this.recording;
    },
    stopRecord() {
      this.recorder && this.recorder.stop();
      this.createDownloadLink();
      //   this.recorder.clear();
    },
    startRecord() {
      this.recorder && this.recorder.record();
    },
    apply({ intent, slots }) {},
    sendIntent() {
      this.result=this.input;
      this.input=null;
      this.apis("./db/select", {
        params: {
          tableName: this.result
        }
      }).then(r => {
        alert(r)
      }).catch(e=>{
        console.error(e)
      });

      var form = new FormData();
      form.append("scene_id", 8);

      this.dialogs.push({
        msg: this.result,
        self: true
      });
      let self = this;
      if (this.state == 2) {
        //对话请求
        form.append("user_input", this.result);
        form.append("session_id", self.session_id);
        $.ajax({
          url: "http://10.8.6.11:9000/chatbot/service/dialog/",
          method: "post",
          data: form,
          processData: false,
          contentType: false,
          success(rsp) {
            if (rsp.asked) {
              self.session_id = rsp.session_id;
              self.dialogs.push({
                msg: rsp.asked
              });
            } else if (rsp.result&&rsp.result.answer) {
              self.session_id = null;
              self.state = 0;
              self.dialogs.push({
                msg: rsp.result.answer
              });

              self.apply({
                intent: self.intent,
                slots: {
                  operations: [rsp.result.slot_words.d],
                  filters: [rsp.result.slot_words.r],
                  table: rsp.result.slot_words.table
                }
              });
            } else {
              self.dialogs.push({
                msg: "意图不明确"
              });
            }
          },
          error(e) {
            self.dialogs.push({
              msg: "[错误]发送异常"
            });
            throw e;
          }
        });
      } else if (this.state == 1) {
        //选择意图
        console.log(this.intents, this.result);
        let r = this.intents[this.result];
        if (r) {
          this.result = r.name;
          this.state = 2;
          self.intent = r.name;
          this.sendIntent();
        } else {
          self.dialogs.push({
            msg: "不确定你的意图"
          });

          for (let index = 0; index < this.intents.length; index++) {
            let intent = rsp.intents[index];
            self.dialogs.push({
              msg: `${index} ${intent.name}`
            });
          }
        }
      } else {
        this.session_id = null;
        this.intents = [];
        this.intent = null;
        form.append("intent", self.result);
        $.ajax({
          url: "http://10.8.6.11:9000/chatbot/service/intent_recognize/",
          method: "post",
          data: form,
          processData: false,
          contentType: false,
          success(rsp) {
            if (rsp.intents.length > 1) {
              self.dialogs.push({
                msg: `请选择意图`
              });
              for (let index = 0; index < rsp.intents.length; index++) {
                let intent = rsp.intents[index];
                self.dialogs.push({
                  msg: `${index} ${intent.name}`
                });
              }
              self.intents = rsp.intents;
              self.state = 1;
            } else if (rsp.intents.length == 1) {
              self.state = 2;
              self.result = rsp.intents[0].name;
              self.intent = rsp.intents[0].name;
              self.sendIntent();
            } else {
              self.dialogs.push({
                msg: "不确定你的意图"
              });
            }
          },
          error(e) {
            self.dialogs.push({
              msg: "[错误]发送异常"
            });
            throw e;
          }
        });
      }
    },
    createDownloadLink() {
      this.handling = true;
      self = this;
      this.recorder &&
        this.recorder.exportWAV(function(blob) {
          let formData = new FormData();
          formData.append("speech_file", blob);
          console.log(blob);

          $.ajax({
            url: "http://14.23.114.194:9000/chatbot/service/speech/speech2Text",
            method: "post",
            processData: false,
            contentType: false,
            data: formData,
            success: function(rsp) {
              if (rsp.result.err_no == 0) {
                console.log(rsp.result.result);
                self.input = rsp.result.result[0];
              }
              self.recorder.clear();
              self.handling = false;
            },
            error() {
              self.recorder.clear();
              self.handling = false;
            }
          });
        });
    },
    log(msg) {
      console.log("[record]", msg);
    },
    startUserMedia(stream) {
      var input = this.audio_context.createMediaStreamSource(stream);
      this.log("Media stream created.");
      this.recorder = new Recorder(input, {
        numChannels: 1,
        sampleRate: 16000,
        sampleBits: 16
      });
      window.recorder = this.recorder;
      this.log("Recorder initialised.");
    }
  },
  mounted() {
    $(this.$el).draggable({
      
    });
    try {
      // webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      navigator.getUserMedia =
        navigator.getUserMedia || navigator.webkitGetUserMedia;
      window.URL = window.URL || window.webkitURL;

      this.audio_context = new AudioContext();
      this.log("Audio context set up.");
      this.log(
        "navigator.getUserMedia " +
          (navigator.getUserMedia ? "available." : "not present!")
      );
    } catch (e) {
      throw e;
      alert("No web audio support in this browser!");
    }

    navigator.getUserMedia(
      {
        audio: true
      },
      this.startUserMedia,
      function(e) {
        this.log("No live audio input: " + e);
      }
    );
  },
  computed: {
    dialogClass(dialog) {
      return dialog => {
        return { right: dialog.self, left: !dialog.self };
      };
    },
    recordClass() {
      return {
        recording: this.recording
      };
    }
  }
};
</script>
<style>
.dialogWindow {
  position: fixed;
  overflow: none;
  box-shadow: 0 0 5px 1px gray;
}
.chat {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 250px;
  background: white;
  overflow: auto;
}
.dialog {
  position: relative;
  height: 20px;
  margin-top: 10px;
}
.message {
  padding: 0px 4px;
  border-radius: 5px;
}
.message > pre {
  margin: 0;
}
.right {
  background: lightgreen;
  float: right;
  margin-right: 10px;
}
.left {
  background: lightblue;
  margin-left: 10px;
  float: left;
}
</style>

