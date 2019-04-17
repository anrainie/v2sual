<template>
  <div class="recordPanel">
    <div v-loading="handling" class="resultPanel" @click="result=null">{{result}}</div>
    <div>
      <i class="el-icon-service recorder" :class="recordClass" @click="record"></i>
    </div>
    <div>
      <el-input v-model="result" size="mini"></el-input>
      <el-button @click="sendIntent(result)" size="mini">发送</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recording: false,
      audio_context: null,
      result: null,
      handling: false
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
    sendIntent(intent) {
      console.log(intent);

      var form = new FormData();
      form.append("scene_id", 8);
      form.append("user_input", intent);
      $.ajax({
        url: "http://10.8.6.11:9000/chatbot/service/dialog/",
        method: "post",
        data: form,
        processData: false,
        contentType: false,
        success(rsp) {
          console.log(rsp);
        },
        error(e) {
          throw e;
        }
      });
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
                self.result = rsp.result.result[0];

                self.sendIntent(self.result);
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
      this.log("Recorder initialised.");
    }
  },
  mounted() {
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
    recordClass() {
      return {
        recording: this.recording
      };
    }
  }
};
</script>
<style>
.recordPanel {
  position: fixed;
  bottom: 5%;
  right: 5%;
}
.resultPanel {
  position: relative;
  width: 200px;
  height: 50px;
}
.recorder {
  color: white;
  background: gray;
  opacity: 0.8;
  text-align: center;
  font-size: 3rem;
  line-height: 4rem;
  width: 50px;
  height: 50px;
  position: relative;
}

.recorder:hover {
  opacity: 1;
}
.recording {
  background: lightgreen;
}
</style>
