import React from 'react';
import '../styles/loader.css';
function Loader() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div class="section-banner">
          <div id="star-1">
            <div class="curved-corner-star">
              <div id="curved-corner-bottomright"></div>
              <div id="curved-corner-bottomleft"></div>
            </div>
            <div class="curved-corner-star">
              <div id="curved-corner-topright"></div>
              <div id="curved-corner-topleft"></div>
            </div>
          </div>

          <div id="star-2">
            <div class="curved-corner-star">
              <div id="curved-corner-bottomright"></div>
              <div id="curved-corner-bottomleft"></div>
            </div>
            <div class="curved-corner-star">
              <div id="curved-corner-topright"></div>
              <div id="curved-corner-topleft"></div>
            </div>
          </div>

          <div id="star-3">
            <div class="curved-corner-star">
              <div id="curved-corner-bottomright"></div>
              <div id="curved-corner-bottomleft"></div>
            </div>
            <div class="curved-corner-star">
              <div id="curved-corner-topright"></div>
              <div id="curved-corner-topleft"></div>
            </div>
          </div>

          <div id="star-4">
            <div class="curved-corner-star">
              <div id="curved-corner-bottomright"></div>
              <div id="curved-corner-bottomleft"></div>
            </div>
            <div class="curved-corner-star">
              <div id="curved-corner-topright"></div>
              <div id="curved-corner-topleft"></div>
            </div>
          </div>

          <div id="star-5">
            <div class="curved-corner-star">
              <div id="curved-corner-bottomright"></div>
              <div id="curved-corner-bottomleft"></div>
            </div>
            <div class="curved-corner-star">
              <div id="curved-corner-topright"></div>
              <div id="curved-corner-topleft"></div>
            </div>
          </div>

          <div id="star-6">
            <div class="curved-corner-star">
              <div id="curved-corner-bottomright"></div>
              <div id="curved-corner-bottomleft"></div>
            </div>
            <div class="curved-corner-star">
              <div id="curved-corner-topright"></div>
              <div id="curved-corner-topleft"></div>
            </div>
          </div>

          <div id="star-7">
            <div class="curved-corner-star">
              <div id="curved-corner-bottomright"></div>
              <div id="curved-corner-bottomleft"></div>
            </div>
            <div class="curved-corner-star">
              <div id="curved-corner-topright"></div>
              <div id="curved-corner-topleft"></div>
            </div>
          </div>
        </div>
        <div class="loader pl-6">
          <div data-glitch="Loading..." class="glitch">
            Loading...
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
