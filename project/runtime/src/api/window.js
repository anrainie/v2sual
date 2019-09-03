import $ from 'jquery'

let base = process.env.NODE_ENV === 'production' ? 'aweb://localhost' : ''

function windowState (data) {
  return new Promise(resolve => {
    $.ajax({url: `${base}/windowservice`,
      type:"GET",
      data:JSON.stringify(data),
      complete: resolve
    });
  })
}

export const closeWindow = () => windowState({"extendedState": 'close'});

export const minimizeWindow = () => windowState({"extendedState": 'min'});

export const maximizeWindow = () => windowState({"extendedState": 'max'});

export const resizeWindow = () => windowState({"extendedState": 'restore'});

export const moveWindow = (x, y) => windowState({"location":"relative", "y": y, "x": x});

