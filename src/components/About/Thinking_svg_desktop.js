import { animated, useSpring, useSprings } from "react-spring";

//Parts
function IdeaBubbleLeft(props) {
  return (
    <g {...props}>
      {/* IdeaBubbleLeft */}
      <path
        fill="url(#paint1_linear_2_2)"
        d="M269.193 338.68a146.904 146.904 0 00-22.482-190.158A146.902 146.902 0 0020.226 330.371a146.904 146.904 0 00180.808 63.034 47.523 47.523 0 0054.403 33.906 47.517 47.517 0 0030.935-73.017 47.513 47.513 0 00-17.179-15.614z"
      ></path>
      {/* IdeaBubbleLeft Strips*/}
      <path
        fill="#fff"
        d="M234.527 227.304H59.782V241.1h174.745v-13.796zM234.527 250.297H59.782v13.795h174.745v-13.795zM234.527 273.29H59.782v13.795h174.745V273.29z"
      ></path>
    </g>
  );
}

function IdeaBubbleRight(props) {
  return (
    <g {...props}>
      {/* IdeaBubbleRight */}
      <path
        fill="url(#paint2_linear_2_2)"
        d="M581.807 229.406a146.9 146.9 0 1168.158 54.725 47.511 47.511 0 01-31.235 32.426 47.514 47.514 0 01-58.274-26.708 47.522 47.522 0 014.172-44.829 47.513 47.513 0 0117.179-15.614z"
      ></path>
      {/* IdeaBubbleRight Strips*/}
      <path
        fill="#fff"
        d="M616.473 131.826h174.746V118.03H616.473v13.796zM616.473 154.819h174.746v-13.796H616.473v13.796zM616.473 177.812h174.746v-13.796H616.473v13.796z"
      ></path>
    </g>
  );
}

function TopPurpleDot() {
  return (
    <g>
      <path
        fill="#6C63FF"
        d="M653 387.054c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
      ></path>
    </g>
  );
}

function RightDarkDot() {
  return (
    <g>
      <path
        fill="#3F3D56"
        d="M694 435.054c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
      ></path>
    </g>
  );
}

function MidPurpleDots() {
  return (
    <g>
      <path
        fill="#6C63FF"
        d="M666 467.054c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zM700 494.054c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
      ></path>
    </g>
  );
}

//Animated Parts
function AnimatedBubbleLeft() {
  const animatedBubbleLeftStyle = useSpring({
    loop: { reverse: true },
    from: { scale: 0.2, rotate: "-20deg" },
    to: { scale: 0.8, rotate: "20deg" },
    config: {
      friction: 40,
    },
    delay: 0,
  });

  return (
    <animated.g
      style={{
        transformOrigin: "center",
        ...animatedBubbleLeftStyle,
      }}
    >
      <IdeaBubbleLeft />
    </animated.g>
  );
}

function AnimatedBubbleRight() {
  const animatedBubbleRightStyle = useSpring({
    loop: { reverse: true },
    from: { scale: 0.1, rotate: "0deg" },
    to: { scale: 1, rotate: "-10deg" },
    config: {
      friction: 40,
    },
    delay: 300,
  });

  return (
    <animated.g
      style={{
        transformOrigin: "center",
        ...animatedBubbleRightStyle,
      }}
    >
      <IdeaBubbleRight />
    </animated.g>
  );
}

function AnimatedPlantDots() {
  const plantDots = [<TopPurpleDot />, <RightDarkDot />, <MidPurpleDots />];
  const animatedPlantDotsStyles = useSprings(
    3,
    plantDots.map((_, index) => {
      return {
        loop: { reverse: true },
        from: { transform: "scale(0.5)" },
        to: { transform: "scale(1)" },
        config: {
          friction: 16,
        },
        delay: index * 50,
      };
    })
  );

  const animatedPlantDots = animatedPlantDotsStyles.map(
    (animatedPlantDotsStyle, index) => {
      return (
        <animated.g
          style={{
            transformOrigin: "center",
            transformBox: "fill-box",
            ...animatedPlantDotsStyle,
          }}
          key={index}
        >
          {plantDots[index]}
        </animated.g>
      );
    }
  );

  return animatedPlantDots;
}

//Whole Picture
function Thinking_Icon() {
  // react main render starts from here
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="600"
        height="auto"
        fill="none"
        viewBox="0 0 851 747"
      >
        <g clipPath="url(#clip0_2_2)">
          <AnimatedBubbleLeft />
          <AnimatedBubbleRight />
          {/* SeatBubble */}
          <path
            fill="url(#paint3_linear_2_2)"
            d="M326.713 631.491a82.014 82.014 0 01119.393-109.728 82.008 82.008 0 0119.602 105.089 82.007 82.007 0 01-43.95 36.302 82.009 82.009 0 01-56.993-1.11 26.523 26.523 0 01-17.438 18.102 26.525 26.525 0 01-32.534-14.91 26.538 26.538 0 012.329-25.028 26.523 26.523 0 019.591-8.717z"
          ></path>
          <path
            fill="#fff"
            d="M362.551 593.331a9.491 9.491 0 100-18.981 9.491 9.491 0 000 18.981zM394.932 593.331c5.241 0 9.491-4.249 9.492-592.491-.001 577.759-4.251 573.509-9.492 573.509a9.491 9.491 0 000 18.982zM427.312 593.331a9.491 9.491 0 100-18.981 9.491 9.491 0 000 18.981z"
          ></path>
          <path
            fill="#2F2E41"
            d="M404.436 289.408s42.347 1.151 49.34 3.696c6.994 2.544 10.121 20.739 10.121 20.739l-32.879 10.335-24.592-1.393-18.508 1.307 10.335-27.065 6.183-7.619z"
          ></path>
          <path
            fill="#CF9292"
            d="M406.174 280s2.786 10.761-3.397 18.38c-6.184 7.619 26.582 34.77 26.582 34.77l17.285-2.971s-3.809-33.064 1.308-41.437c5.117-8.373-41.778-8.742-41.778-8.742z"
          ></path>
          <path
            fill="#CF9292"
            d="M565.174 290s2.786 10.761-3.397 18.38c-6.184 7.619 26.582 34.77 26.582 34.77l17.285-2.971s-3.809-33.064 1.308-41.437c5.117-8.373-41.778-8.742-41.778-8.742z"
            opacity="0.1"
          ></path>
          <path
            fill="#CF9292"
            d="M521.22 590.132l-38.139 50.577 26.028 15.196 35.822-58.609-23.711-7.164z"
          ></path>
          {/* left shoe */}
          <path
            fill="#2F2E41"
            d="M494.468 641.562s-14.045-16.319-13.419-12.68c.625 3.639-9.993 34.5-.114 37.485 9.879 2.985 94.601 10.903 95.766 1.336 1.166-9.567-25.274-16.262-25.274-16.262s-15.708-15.096-19.19-13.561c-3.483 1.536-37.769 3.682-37.769 3.682z"
          ></path>
          {/* right anckle */}
          <path
            fill="#CF9292"
            d="M512.663 638.435l30.463 51.898 22.999-13.319-30.718-42.489-22.744 3.91z"
          ></path>
          {/* left calve */}
          <path
            fill="#2F2E41"
            d="M560.752 514.963l-9.041 12.794s-43.1 59.859-38.522 64.692c4.577 4.833 23.639 23.1 33.334 19.56 9.694-3.54 44.137-64.721 44.137-64.721l-8.984-35.921-20.924 3.596z"
          ></path>
          <path
            fill="#2F2E41"
            d="M375.09 502.853s9.652 18.01 34.116 24.108c24.464 6.098 50.022 18.565 50.932 18.408.91-.156 3.483-1.535 4.108 2.104.626 3.639 7.335 9.979 7.335 9.979s27.023 91.829 37.343 91.928c10.32.1 31.529-7.292 31.97-10.178.44-2.885-31.6-96.661-31.913-98.481l-3.753-21.834s42.375 6.766 46.327 7.96c3.951 1.194 39.105 20.441 39.105 20.441s35.836-25.829 2.317-51.913c-33.519-26.084-91.132-45.217-91.132-45.217l-20.669-5.814-18.013-1.076-2.653-10.17-42.662 2.461-44.521 18.892 1.763 48.402z"
          ></path>
          {/* face */}
          <path
            fill="#CF9292"
            fillOpacity="0.99"
            d="M431.395 296.932c18.353 0 33.231-14.879 33.231-33.232s-14.878-33.232-33.231-33.232-33.232 14.879-33.232 33.232 14.879 33.232 33.232 33.232z"
          ></path>
          <path
            fill="#D0CDE1"
            d="M401.33 290.41l3.997-.687s7.219 27.795 29.551 32.386c0 0 11.019-13.2 10.548-15.427-.47-2.228 8.727-14.111 13.617-7.459 4.89 6.653-1.194 123.841 2.914 125.945 4.109 2.103 12.922 4.335 5.829 12.111-7.094 7.775-35.268 18.238-41.508 14.627-6.24-3.61-18.991-34.201-24.507-44.493-5.515-10.291-14.343-45.303-14.343-45.303s-11.272-38.337-4.336-47.023c6.937-8.685 18.238-24.677 18.238-24.677z"
          ></path>
          <path
            fill="#2F2E41"
            d="M433.135 434.681a189.645 189.645 0 01-3.807 24.268c-1.63 6.508-3.527 10.437-5.693 10.27-5.526-.413-8.037 7.691-9.332 17.034-1.384 9.913-1.384 21.221-2.143 25.217-1.005 5.28-7.435 9.31-20.283 8.127a90.717 90.717 0 01-22.348-5.481c-17.348-6.307-16.834-57.456-13.932-95.409 1.775-23.264 4.443-41.582 4.443-41.582s-5.269-15.717-6.954-26.49a35.198 35.198 0 01-.503-5.949c.257-9.411 17.437-34.84 27.818-50.68 10.393-15.84 24.57-4.219 24.57-4.219l-4.934 14.891s7.646 11.799 7.702 23.029c.056 11.23 18.307 19.334 24.86 24.77 4.119 3.416 4.018 49.016.536 82.204zM447.564 295.108s1.198 1.415 6.681.725c6.577-.828 15.619 1.447 17.719 7.726 3.853 11.514 14.713 58.352 14.713 58.352s4.52 53.548 6.553 65.375c2.033 11.826 1.024 22.303 3.028 28.515s-19.787-11.585-27.819-9.268c-8.031 2.317-13.191-27.705-12.182-38.182 1.009-10.476 1.862-21.862-.924-32.623s2.153-39.24 1.969-45.765c-.185-6.525-17.71-22.969-9.738-34.855z"
          ></path>
          <path
            fill="#CF9292"
            d="M471.078 461.534s35.186 19.195 38.553 46.517c3.368 27.322-47.062-26.454-47.062-26.454l8.509-20.063zM491.164 442.159s10.781 54.345 27.577 51.458c16.795-2.887-9.382-54.586-9.382-54.586l-18.195 3.128z"
          ></path>
          {/* right shoe */}
          <path
            fill="#2F2E41"
            d="M548.684 679.075s-8.6 9.908-10.733 8.401c-2.132-1.507-7.036 19.006-2.615 22.929 4.421 3.923 21.45 10.363 21.635 16.887.185 6.525 45.858 5.231 47.492-1.606 1.635-6.838-5.728-22.431-10.903-25.289-5.174-2.857-24.306-29.154-24.306-29.154s-14.984 2.189-20.57 7.832z"
          ></path>
          <path
            fill="#000"
            d="M465.473 494.77c-8.16-5.76-30.943-7.188-51.17-8.517-8.875-.569-17.258-1.127-23.699-2.031-6.207-.86-11.788-6.531-16.744-14.981-7.513-12.804-13.586-32.004-18.263-50.534 1.775-23.264 4.443-41.582 4.443-41.582s-5.269-15.717-6.954-26.49a14.176 14.176 0 014.487-4.041c21.455-9.209 41.939 81.422 44.54 95.644.045.234.078.458.112.647 1.261 7.323 14.891 13.586 27.103 16.064 7.524 1.529 14.523 1.63 17.749-.358 8.473-5.201 34.527 15.617 36.503 16.209 1.975.603-6.386 28.264-18.107 19.97z"
            opacity="0.1"
          ></path>
          {/* hair + arms */}
          <path
            fill="#2F2E41"
            d="M357.577 341.015s-15.594 7.364-8.742 41.778c6.851 34.415 20.654 92.923 41.763 95.852 21.11 2.928 63.143 2.26 74.871 10.547 11.727 8.287 20.085-19.375 18.11-19.972-1.976-.597-28.033-21.408-36.505-16.205-8.472 5.202-42.815-3.881-44.848-15.708-2.033-11.826-22.844-105.659-44.649-96.292zM469.946 324.512l17.138 39.767s1.725-.861 3.73 5.351c2.004 6.212 2.942 11.67 6.453 15.75s19.134 62.276 19.603 65.005c.469 2.729-21.577 12.138-26.503 4.555-4.926-7.583-20.421-130.428-20.421-130.428zM412.488 263.237c1.274-.34 1.461-2.031 1.504-3.348.228-7.055 4.477-14.295 11.23-16.349a18.878 18.878 0 017.959-.438 30.151 30.151 0 0110.778 3.596c1.759.989 3.485 2.18 5.48 2.482 1.317.199 7.023 1.858 8.335 2.092 2.885.513 5.566 3.094 8.334 2.133 2.648-.918 3.234-4.347 3.298-7.15.146-6.384-4.701-15.221-8.97-19.971-3.239-3.604-8.117-5.268-12.886-6.133a85.804 85.804 0 00-16.852-1.025c-7.632.136-15.474.725-22.355 4.027-6.882 3.302-12.662 9.873-12.991 17.499-.069 1.588.095 3.183-.039 4.767-.326 3.865-2.378 7.356-3.341 11.113a20.34 20.34 0 002.84 16.251c2.554 3.758 6.568 7.157 6.42 11.698l5.538-5.737a4.543 4.543 0 001.352-5.555l-1.96-7.645a6.902 6.902 0 01-.17-4.255c2.101-5.192 4.373 2.515 6.496 1.948z"
          ></path>
          {/* plant stem */}
          <path
            fill="#3F3D56"
            d="M664.146 645.576c-.229-.375-5.64-9.41-7.516-28.172-1.721-17.213-.614-46.227 14.432-86.698 28.506-76.671-6.569-138.534-6.927-139.15l1.73-1.004c.091.156 9.142 15.929 14.489 41.044a179.07 179.07 0 01-7.416 99.807c-28.458 76.54-7.301 112.773-7.084 113.131l-1.708 1.042z"
          ></path>
          <AnimatedPlantDots />
          <path
            fill="#3F3D56"
            d="M656 536.054c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zM672 646.054s-13-32 26-56l-26 56zM656.012 645.474s-5.916-34.03-51.708-33.738l51.708 33.738z"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2_2"
            x1="696.5"
            x2="247.5"
            y1="654.5"
            y2="720"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4B6782"></stop>
            <stop offset="1" stopColor="#A741B0" stopOpacity="0.78"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_2"
            x1="41.5"
            x2="601.5"
            y1="162.5"
            y2="664.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C63FF"></stop>
            <stop offset="0.656" stopColor="#40C49C" stopOpacity="0.29"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_2"
            x1="804"
            x2="546.5"
            y1="24"
            y2="309.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C63FF"></stop>
            <stop offset="1" stopColor="#4793A4" stopOpacity="0.78"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_2"
            x1="394.732"
            x2="394.732"
            y1="503.701"
            y2="681.415"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C63FF"></stop>
            <stop offset="1" stopColor="#63FFC7"></stop>
          </linearGradient>
          <clipPath id="clip0_2_2">
            <path fill="#fff" d="M0 0H851V746.054H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default Thinking_Icon;
