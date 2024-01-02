import React from "react";
import { animated, useSpring, useSprings } from "react-spring";
import { createMedia } from "@artsy/fresnel"

//Parts
function Head(props) {
  return (
    <g {...props}>
      {/*face */}
      <circle
        cx="441.853"
        cy="99.211"
        r="70.666"
        fill="#feb8b8"
        data-name="Ellipse 276"
      ></circle>
      {/*hair */}
      <path
        fill="#2f2e41"
        d="M668.54 246.746a81.614 81.614 0 00-46.43-35.492l-8.675 6.331v-8.22a75.123 75.123 0 00-14.032-.818l-7.485 6.773v-6.21a80.834 80.834 0 00-55.763 33.169c-16.254 23.432-18.998 56.032-3.011 79.652 4.388-13.487 9.715-26.142 14.104-39.628a39.916 39.916 0 0010.399.05l5.339-12.458 1.492 11.931c16.55-1.441 41.096-4.607 56.785-7.508l-1.526-9.153 9.128 7.606c4.806-1.106 7.66-2.11 7.424-2.877 11.669 18.81 25.949 30.825 37.616 49.636 4.432-26.524 9.532-48.58-5.365-72.784z"
        data-name="Path 1461"
        transform="translate(-160.685 -208.5)"
      ></path>
      {/* head phone*/}
      <path
        fill="#6c63ff"
        d="M376.87 125.55c-11.354 0-20.559-9.953-20.559-22.23V92.205c0-12.277 9.205-22.23 20.56-22.23v55.574zM508.094 69.976c11.355 0 20.56 9.952 20.56 22.229v11.115c0 12.277-9.205 22.23-20.56 22.23V69.975z"
      ></path>
      {/* head phone*/}
      <path
        fill="#6c63ff"
        d="M518.868 93.952h-3.262c0-44.73-33.657-81.121-75.026-81.121-41.37 0-75.026 36.39-75.026 81.12h-3.262c0-46.674 35.12-84.647 78.288-84.647s78.288 37.973 78.288 84.648z"
      ></path>
    </g>
  );
}

function LeftArm() {
  return (
    <g>
      {/*left arm */}
      <path
        fill="#fbbebe"
        d="M436.31 551.903a45.043 45.043 0 00-.152 11.109l3.656 52.512c.343 4.95.681 9.887 1.146 14.824.877 9.581 2.188 19.086 3.814 28.578a5.09 5.09 0 005.217 4.95c16.096 3.405 32.726 3.269 49.153 2.341 25.067-1.4 89.198-4.046 93.116-9.136s1.635-13.322-3.474-17.438-89.739-14.15-89.739-14.15c.827-6.552 3.322-12.723 5.688-18.945 4.25-11.035 8.22-22.432 8.297-34.253s-4.377-24.25-14.061-31.022c-7.966-5.56-18.221-6.591-27.928-6.362-7.062.203-19.265-1.49-25.716 1.272-5.104 2.248-8.063 10.722-9.017 15.72z"
        data-name="Path 1421"
        transform="translate(-160.685 -208.5)"
      ></path>
      {/*left sholder */}
      <path
        fill="#6c63ff"
        d="M457.627 458.523a13.17 13.17 0 00-2.824 4.518 213.588 213.588 0 00-17.941 73.315 7.33 7.33 0 01-.827 3.55 15.535 15.535 0 01-1.87 2.023 7.024 7.024 0 00.84 9.899q.173.146.356.28c2.099-3.95 7.125-5.242 11.592-5.585 21.389-1.692 42.281 8.259 63.734 7.508-1.513-5.23-3.69-10.256-4.925-15.548-5.459-23.502 8.157-49.09-.19-71.726-1.668-4.53-4.454-8.983-8.843-10.968a23.555 23.555 0 00-5.662-1.499c-5.421-.98-16.212-5.166-21.453-3.486-1.935.624-2.697 2.443-4.3 3.542-2.437 1.556-5.668 2.128-7.687 4.177z"
        data-name="Path 1430"
        transform="translate(-160.685 -208.5)"
      ></path>
    </g>
  );
}

function PCPowerCircle() {
  return (
    <g>
      {/* pc power circle*/}
      <circle
        cx="449.236"
        cy="390.766"
        r="7.635"
        fill="#fff"
        data-name="Ellipse 263"
      ></circle>
    </g>
  );
}

//Animated Parts
function AnimatedHead() {
  const animatedBubbleRightStyle = useSpring({
    loop: { reverse: true },
    from: { scale: 1, rotate: "10deg" },
    to: { scale: 1, rotate: "-5deg" },
    config: {
      friction: 40,
    },
    delay: 200,
  });

  return (
    <animated.g
      style={{
        transformOrigin: "center",
        ...animatedBubbleRightStyle,
      }}
    >
      <Head />
    </animated.g>
  );
}

function AnimatedLeftArm() {
  const animatedBubbleRightStyle = useSpring({
    loop: { reverse: true },
    from: { scale: 1, rotate: "0deg" },
    to: { scale: 1, rotate: "-2deg" },
    config: {
      friction: 10,
    },
    delay: 0,
  });

  return (
    <animated.g
      style={{
        transformOrigin: "center",
        ...animatedBubbleRightStyle,
      }}
    >
      <LeftArm />
    </animated.g>
  );
}

function AnimatedPCPowerCircle() {
  const animatedBubbleRightStyle = useSpring({
    loop: { reverse: true },
    from: { scale: 1, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: {
      friction: 40,
    },
    delay: 100,
  });

  return (
    <animated.g
      style={{
        ...animatedBubbleRightStyle,
      }}
    >
      <PCPowerCircle />
    </animated.g>
  );
}

function TypingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="550"
      height="100%"
      data-name="Layer 1"
      viewBox="0 0 878.63 483"
      style={{ maxWidth: '140%' }} 
    >
      <path
        fill="#f1f1f1"
        d="M134.032 412.703c-19.511 14.545-25.04 40.135-25.04 40.135s26.103 2.01 45.614-12.535 25.04-40.135 25.04-40.135-26.104-2.009-45.614 12.535z"
      ></path>
      <path
        fill="#f1f1f1"
        d="M142.159 419.532c-9.377 22.456-32.862 34.028-32.862 34.028s-8.281-24.836 1.096-47.293 32.862-34.028 32.862-34.028 8.281 24.837-1.096 47.293z"
      ></path>
      <path
        fill="#cacaca"
        d="M703.502 354.614a194.657 194.657 0 01-1.633-42.195l1.633-23.307c-9 17.908-6.966 41.478 0 65.502zM710.52 358.513a143.09 143.09 0 01-.785-25.116l.786-13.874c-4.33 10.66-3.352 24.69 0 38.99z"
      ></path>
      <path
        fill="#f2f2f2"
        d="M741.716 375.67v7.798a2.352 2.352 0 01-2.34 2.34h-3.899a.777.777 0 00-.78.78v63.942a2.351 2.351 0 01-2.339 2.34h-47.567a2.341 2.341 0 01-2.34-2.34v-63.943a.782.782 0 00-.78-.78h-4.678a2.341 2.341 0 01-2.34-2.339v-7.798a2.336 2.336 0 012.34-2.34h62.383a2.346 2.346 0 012.34 2.34z"
      ></path>
      <path fill="#e6e6e6" d="M682.522 387.445H734.768V389.784H682.522z"></path>
      <path
        fill="#e6e6e6"
        d="M734.698 421.869c-17.483 7.235-35.156 7.314-53.026 0v-16.481a83.274 83.274 0 0153.026 0z"
      ></path>
      <AnimatedHead />
      {/*body */}
      <path
        fill="#6c63ff"
        d="M593.835 280.93c-2.43-14.619-4.937-29.519-11.731-42.689-4.465-8.626-11.554-16.846-21.11-18.552a20.422 20.422 0 01-5.496-1.272c-2.8-1.349-40.425-22.828-46.406-26.569-5.134-3.211-13.24-9.158-17.327-9.158-4.111-.09-19.877 3.58-81.413-1.23 0 0-16.905 6.662-29.986 14.742-.198-.13-63.869 34.06-66.26 33.97-4.531-.19-8.742 2.71-11.339 6.363-2.596 3.652-3.814 8.174-5.09 12.545 13.908 30.97 26.632 61.98 40.54 92.95a7.93 7.93 0 011.006 3.814 9.31 9.31 0 01-1.73 3.815c-6.821 10.956-6.604 24.736-5.86 37.613.747 12.877 1.669 26.478-4.086 38.02-1.565 3.169-3.6 6.07-5.09 9.238-3.486 7.177-4.746 30.13-2.71 37.842l255.121 7.308c-5.485-15.078 18.967-198.75 18.967-198.75z"
      ></path>
      <AnimatedLeftArm />
      {/*right arm */}
      <path
        fill="#fbbebe"
        d="M754.672 536.183c-6.45-2.761-18.653-1.07-25.715-1.272-9.707-.23-19.962.802-27.928 6.362-9.684 6.772-14.137 19.2-14.06 31.022s4.045 23.218 8.296 34.253c2.366 6.222 4.86 12.393 5.688 18.946 0 0-84.63 10.034-89.74 14.15s-7.391 12.347-3.473 17.437 126.173 10.2 142.269 6.794a5.09 5.09 0 005.216-4.95c1.627-9.49 2.938-18.996 3.815-28.577.465-4.937.802-9.874 1.146-14.824l3.656-52.512a45.043 45.043 0 00-.152-11.109c-.954-4.998-3.913-13.472-9.018-15.72z"
        data-name="Path 1421"
        transform="translate(-160.685 -208.5)"
      ></path>
      {/*right shoulder */}
      <path
        fill="#6c63ff"
        d="M734.687 454.346c-1.604-1.1-2.366-2.918-4.301-3.542-5.24-1.68-16.032 2.507-21.453 3.486a23.555 23.555 0 00-5.662 1.499c-4.39 1.985-7.175 6.438-8.843 10.968-8.347 22.637 5.269 48.224-.19 71.726-1.235 5.292-3.412 10.318-4.925 15.548 21.453.75 42.345-9.2 63.734-7.508 4.467.344 9.493 1.635 11.592 5.586q.183-.135.356-.281a7.024 7.024 0 00.84-9.899 15.535 15.535 0 01-1.87-2.023 7.33 7.33 0 01-.827-3.55 213.588 213.588 0 00-17.94-73.315 13.17 13.17 0 00-2.825-4.518c-2.019-2.049-5.25-2.621-7.686-4.177z"
        data-name="Path 1430"
        transform="translate(-160.685 -208.5)"
      ></path>
      <path
        fill="#3f3d56"
        d="M580.888 481.788H318.857a11.552 11.552 0 01-11.54-11.538V311.283a11.552 11.552 0 0111.54-11.539h262.03a11.552 11.552 0 0111.54 11.539V470.25a11.552 11.552 0 01-11.54 11.538z"
      ></path>
      <AnimatedPCPowerCircle />
      <path
        fill="#f1f1f1"
        d="M878.63 449.724L0 449.724 0 476.724 51.97 476.724 51.97 483 826.68 483 826.68 476.724 878.63 476.724 878.63 449.724z"
      ></path>  
    </svg>
  );
}

export default TypingIcon;
