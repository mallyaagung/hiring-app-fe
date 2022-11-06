import React from "react";
import styles from "../../styles/Home.module.css";
import Banner3 from "../../public/image/baner3.png"
import Image from "next/legacy/image";

export default function Home3({ data }) {
  return (
    <div className="container-lg">
      <div className={`${styles.skill} row mb-5`}>
        <div className={`${styles.side} col-12 col-md-6`}>
          <h1 className="fw-bold">Skill Talent</h1>
          <p className="text-secondary text-start mt-3 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            distinctio facilis dignissimos officiis numquam ullam quo,
            consequuntur quae molestiae aperiam.
          </p>
          <div className="row mb-2">
            {data.map((skill) => (
              <div key={skill.skillName} className="col-6 my-1">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">{skill.skillName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block">
          <div className="position-relative d-flex align-items-center justify-content-center h-100">
            <Image
              className={`${styles["z-index"]} position-absolute`}
              src={Banner3}
              alt="Gambar Landing 3"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}
