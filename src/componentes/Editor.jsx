import React, { useRef } from "react";
import * as utils from "../utils/utils";

export default function Editor(props) {
  const refContainer = useRef(null);

  const handleSetHeader = (e) => {
    utils.setHeader(e.currentTarget.id, refContainer);
  };

  return (
    <>
      <div className="row mb-2">
        <div
          className="col-3 btn-group"
          role="group"
          aria-label="Botones comandos"
        >
          <button
            id="h1"
            type="button"
            onClick={handleSetHeader}
            className="btn btn-outline-primary"
          >
            H1
          </button>
          <button
            id="h2"
            onClick={handleSetHeader}
            type="button"
            className="btn btn-outline-primary"
          >
            H2
          </button>
          <button
            id="h3"
            onClick={handleSetHeader}
            type="button"
            className="btn btn-outline-primary"
          >
            H3
          </button>
          <button
            id="P"
            onClick={handleSetHeader}
            type="button"
            className="btn btn-outline-secondary"
          >
            P
          </button>
          <button
            id="BOLD"
            onClick={handleSetHeader}
            type="button"
            className="btn btn-outline-secondary"
          >
            <strong>N</strong>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <textarea
            className="form-control"
            ref={refContainer}
            id="txtEditor"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </>
  );
}
