import React, { Component } from 'react';
import s from './Setting.module.scss';

export default class Setting extends Component {
  render() {
    return (
      <nav className={s.container}>
        <ul>
          <li>동기화</li>
          <li>설정</li>
          <li>활동 로그 보기</li>
          <li>프린트</li>
        </ul>
        <ul>
          <li>프리미엄 Todoist</li>
          <li>비즈니스 Todoist</li>
        </ul>
        <ul>
          <li>지원</li>
          <li>템플릿</li>
          <li>블로그</li>
          <li>키보드 단축키</li>
        </ul>
        <ul>
          <li>로그아웃</li>
        </ul>
        <ul className={s.menuItemApps}>
          <span>앱</span>
          <li className={s.android}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              data-svgs-path="sm1/platform_android.svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M5 5h14v14H5z" />
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M8.5 15.5c0 .32.26.58.58.58h.59v2.04a.87.87 0 1 0 1.75 0v-2.04h1.16v2.04a.87.87 0 1 0 1.75 0v-2.04h.59c.32 0 .58-.26.58-.58V9.67h-7v5.83zM7.04 9.67a.87.87 0 0 0-.87.87v4.09a.87.87 0 1 0 1.75 0v-4.09a.87.87 0 0 0-.88-.87zm9.92 0a.87.87 0 0 0-.88.87v4.09a.87.87 0 1 0 1.75 0v-4.09a.87.87 0 0 0-.87-.87zm-2.9-3.41l.76-.76a.29.29 0 0 0 0-.41.29.29 0 0 0-.42 0l-.86.86A3.4 3.4 0 0 0 12 5.58c-.56 0-1.08.14-1.55.37l-.87-.86a.29.29 0 0 0-.41 0 .29.29 0 0 0 0 .41l.76.77A3.49 3.49 0 0 0 8.5 9.08h7a3.48 3.48 0 0 0-1.44-2.82zm-3.23 1.66h-.58v-.59h.58v.59zm2.92 0h-.58v-.59h.58v.59z"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              data-svgs-path="sm1/platform_apple.svg"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M18 14.22c-.22.7-.58 1.4-1.06 2.1-.74 1.1-1.48 1.66-2.21 1.66-.28 0-.69-.1-1.21-.27a3.9 3.9 0 0 0-1.3-.27c-.35 0-.76.09-1.22.27-.47.2-.85.29-1.14.29-.87 0-1.74-.73-2.6-2.18A8.47 8.47 0 0 1 6 11.59c0-1.28.32-2.33.97-3.15a3 3 0 0 1 2.45-1.2c.41 0 .92.08 1.52.24.6.17 1 .26 1.2.26.25 0 .66-.1 1.22-.29.6-.19 1.09-.29 1.5-.29.68 0 1.3.19 1.83.55a4.4 4.4 0 0 1 .9.84c-.46.38-.79.7-.99 1a2.95 2.95 0 0 0-.56 1.74c0 .7.2 1.32.6 1.87.4.56.85.91 1.36 1.06zm-3.24-9.87c0 .35-.08.73-.25 1.15a3.45 3.45 0 0 1-.8 1.16c-.31.3-.62.5-.93.6-.21.07-.51.11-.9.15.02-.84.24-1.56.68-2.17.42-.6 1.14-1.01 2.15-1.24a.8.8 0 0 1 .02.1.8.8 0 0 0 .02.08v.09l.01.08z"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              data-svgs-path="sm1/platform_macos.svg"
            >
              <g fill="none" fill-rule="evenodd">
                <rect
                  width="13"
                  height="9"
                  x="5.5"
                  y="6.5"
                  stroke="currentColor"
                  rx="2"
                />
                <path
                  fill="currentColor"
                  d="M14.02 18H10v-1.72c0-.44.05-.6.13-.77a.9.9 0 0 1 .38-.38c.17-.08.33-.13.77-.13h1.46c.44 0 .6.05.77.13.16.1.29.22.38.38.08.17.13.33.13.77V18z"
                />
                <path
                  fill="currentColor"
                  d="M15 18H9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zM5 13h14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              data-svgs-path="sm1/platform_windows.svg"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10.95 12.37v4.72L6 16.41v-4.04h4.95zm0-5.39v4.78H6v-4.1l4.95-.68zm7.12 5.39v5.7l-6.58-.9v-4.8h6.58zm0-6.37v5.76H11.5V6.91L18.07 6z"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              data-svgs-path="sm1/more.svg"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                transform="translate(3 10)"
              >
                <circle cx="2" cy="2" r="2" />
                <circle cx="9" cy="2" r="2" />
                <circle cx="16" cy="2" r="2" />
              </g>
            </svg>
          </li>
        </ul>
        <div>
          <span>버전 931. 체인지로그 보기</span>
          <span>최근 동기화: 1시간 전에</span>
        </div>
      </nav>
    );
  }
}
