import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    if (isTouchDevice) return;

    document.body.classList.add("custom-cursor-active");

    // Mouse movement
    const handleMouseMove = (e) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;

      setIsVisible(true);
    };

    // Detect clickable elements
    const handleMouseOver = (e) => {
      const clickable = e.target.closest(`
        a,
        button,
        input,
        textarea,
        select,
        label,
        [role="button"],
        [data-cursor="pointer"]
      `);

      setIsHovering(Boolean(clickable));
    };

    // Click animation
    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      document.body.classList.remove("custom-cursor-active");

      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`
          love-cursor
          ${isVisible ? "cursor-visible" : ""}
          ${isHovering ? "cursor-hover" : ""}
          ${isClicking ? "cursor-click" : ""}
        `}
      >
        {/* ================= POINTER ================= */}

        <div className="cursor-pointer-arrow">
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            aria-hidden="true"
          >
            <path
              d="M3 2L20 12L12.3 14.1L9.2 22L3 2Z"
              fill="#fff7fb"
              stroke="#f472b6"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ================= GLOW ================= */}

        <div className="cursor-glow" />

        {/* ================= HEART ================= */}

        <div className="cursor-heart">

          <svg
            className="cursor-heart-svg"
            viewBox="0 0 100 90"
            aria-hidden="true"
          >
            <defs>

              <linearGradient
                id="darkHeartGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#831843"
                />

                <stop
                  offset="45%"
                  stopColor="#5f0f32"
                />

                <stop
                  offset="100%"
                  stopColor="#35051c"
                />
              </linearGradient>

              <linearGradient
                id="heartBorder"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#fb7185"
                />

                <stop
                  offset="100%"
                  stopColor="#ec4899"
                />
              </linearGradient>

            </defs>

            {/* HEART BORDER */}

            <path
              d="
                M50 83
                C42 75 9 53 9 29
                C9 13 21 4 35 4
                C43 4 48 9 50 16
                C53 9 59 4 67 4
                C81 4 91 14 91 29
                C91 53 58 75 50 83
                Z
              "
              fill="url(#darkHeartGradient)"
              stroke="url(#heartBorder)"
              strokeWidth="3"
            />

            {/* SMALL HIGHLIGHT */}

            <path
              d="
                M23 20
                C28 12 38 11 43 18
              "
              fill="none"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="3"
              strokeLinecap="round"
            />

          </svg>

          {/* ================= A² ================= */}

          <div className="cursor-logo">
            <span className="cursor-letter">
              A
            </span>

            <span className="cursor-power">
              2
            </span>
          </div>

        </div>
      </div>

      <style>
        {`

        /* =====================================
           REMOVE NORMAL CURSOR
        ===================================== */

        @media (pointer: fine) {

          body.custom-cursor-active,
          body.custom-cursor-active * {
            cursor: none !important;
          }

        }


        /* =====================================
           MAIN CURSOR
        ===================================== */

        .love-cursor {

          position: fixed;

          left: 0;
          top: 0;

          width: 38px;
          height: 38px;

          pointer-events: none;

          z-index: 2147483647;

          opacity: 0;

          transition:
            opacity .15s ease;

          will-change:
            left,
            top;

        }


        .love-cursor.cursor-visible {
          opacity: 1;
        }


        /* =====================================
           HEART
        ===================================== */

        .cursor-heart {

          position: absolute;

          /*
           Heart starts slightly away
           from actual click point.
          */

          left: 6px;
          top: 6px;

          width: 30px;
          height: 28px;

          display: flex;

          align-items: center;
          justify-content: center;

          transform-origin: center;

          filter:
            drop-shadow(
              0 4px 5px
              rgba(0,0,0,.45)
            );

          transition:
            transform .22s ease,
            filter .22s ease;

        }


        .cursor-heart-svg {

          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: visible;

        }


        /* =====================================
           A² LOGO
        ===================================== */

        .cursor-logo {

          position: relative;

          z-index: 5;

          display: inline-flex;

          align-items: flex-start;

          justify-content: center;

          /*
           Slight adjustment so logo
           visually sits in heart center
          */

          transform:
            translateY(-1px);

          color: #fff5fa;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          text-shadow:
            0 1px 3px
            rgba(0,0,0,.7);

          user-select: none;

        }


        .cursor-letter {

          font-size: 13px;

          line-height: 1;

          font-weight: 800;

          letter-spacing: -1px;

        }


        /*
         IMPORTANT:
         2 is positioned at the
         UPPER-RIGHT / HEAD OF A
        */

        .cursor-power {

          position: absolute;

          left: 9px;

          top: -4px;

          font-family:
            Arial,
            sans-serif;

          font-size: 6px;

          line-height: 1;

          font-weight: 800;

          color: #fbcfe8;

          text-shadow:
            0 0 4px
            rgba(244,114,182,.8);

        }


        /* =====================================
           POINTER ARROW
        ===================================== */

        .cursor-pointer-arrow {

          position: absolute;

          /*
           Arrow tip = real mouse point
          */

          left: -2px;
          top: -2px;

          width: 15px;
          height: 15px;

          z-index: 20;

          transform:
            rotate(-7deg);

          filter:
            drop-shadow(
              0 2px 3px
              rgba(0,0,0,.6)
            );

          transition:
            transform .2s ease;

        }


        /* =====================================
           GLOW
        ===================================== */

        .cursor-glow {

          position: absolute;

          left: 9px;
          top: 9px;

          width: 24px;
          height: 22px;

          border-radius: 50%;

          background:
            rgba(219,39,119,.38);

          filter:
            blur(9px);

          opacity: .35;

          transition:
            transform .25s ease,
            opacity .25s ease;

        }


        /* =====================================
           HOVER EFFECT
        ===================================== */

        .love-cursor.cursor-hover
        .cursor-heart {

          transform:
            scale(1.18);

          filter:
            drop-shadow(
              0 0 5px
              rgba(244,114,182,.85)
            )
            drop-shadow(
              0 0 10px
              rgba(219,39,119,.45)
            );

        }


        .love-cursor.cursor-hover
        .cursor-glow {

          transform:
            scale(1.55);

          opacity: .75;

        }


        .love-cursor.cursor-hover
        .cursor-pointer-arrow {

          transform:
            rotate(-7deg)
            scale(1.08);

        }


        /* =====================================
           CLICK
        ===================================== */

        .love-cursor.cursor-click
        .cursor-heart {

          animation:
            cursorHeartClick
            .32s ease;

        }


        @keyframes cursorHeartClick {

          0% {
            transform: scale(1);
          }

          35% {
            transform: scale(.78);
          }

          70% {
            transform: scale(1.2);
          }

          100% {
            transform: scale(1);
          }

        }


        /* =====================================
           IDLE HEARTBEAT
        ===================================== */

        .cursor-heart {

          animation:
            miniHeartBeat
            2.8s
            ease-in-out
            infinite;

        }


        @keyframes miniHeartBeat {

          0%,
          90%,
          100% {
            scale: 1;
          }

          94% {
            scale: 1.06;
          }

          97% {
            scale: 1;
          }

        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (pointer: coarse) {

          .love-cursor {
            display: none !important;
          }

        }


        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .cursor-heart {
            animation: none;
          }

        }

        `}
      </style>
    </>
  );
}

export default CustomCursor;