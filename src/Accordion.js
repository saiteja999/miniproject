import React, {useState} from 'react';

export default function Accordion({title, content}) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <div
                class="btn"
                type="button"
                onClick={() => {
                  setShow(!show);
                }}
                style={{
                  color: '#007bff',
                }}
              >
                {title}
              </div>
            </h2>
          </div>

          {show && (
            <div id="collapseOne" class="collapse show">
              <div class="card-body">
                {content.map((text) => {
                  return (
                    <div
                      style={{
                        margin: '10px 0px',
                      }}
                    >
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
