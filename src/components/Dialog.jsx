import React from 'react';
const Dialog = ({
  head,
  headClass,
  body,
  btnName,
  btnClass,
  funcToDo,
  cancel,
}) => {
  return (
    <div onClick={cancel} className="dialog-page">
      <div className="dialog p-3">
        <div className={`dialog-head p-3 mt-3 text-center ${headClass}`}>
          {head}
        </div>
        <div className="dialog-body bg-white p-3">{body}</div>
        <div className="dialog-controls bg-white flex-row justify-between">
          <button onClick={funcToDo} className={`p-2 m-4 btn ok ${btnClass}`}>
            {btnName}
          </button>
          <button onClick={cancel} className="p-2 m-4 btn cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
