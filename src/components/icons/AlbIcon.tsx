const AlbIcon = () => {
    const svgIcon = `
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_47_13890)">
    <path d="M13.0836 26.4361C20.2294 26.4361 26.0222 20.7148 26.0222 13.6573C26.0222 6.59971 20.2294 0.878418 13.0836 0.878418C5.93783 0.878418 0.14502 6.59971 0.14502 13.6573C0.14502 20.7148 5.93783 26.4361 13.0836 26.4361Z" fill="#F42F4C"/>
    <path d="M20.0911 16.4843C19.7272 15.8454 18.7164 16.3246 18.1907 16.3246C18.4738 16.085 19.2016 15.5658 19.6059 15.5658C19.3229 15.3262 18.7972 15.5259 18.5951 15.7655C17.8673 16.6041 17.4225 16.1648 16.3713 15.8454C17.2203 14.9668 13.9453 14.3279 14.9965 13.6091C15.1987 13.4493 15.5626 14.847 16.1287 14.6074C16.3713 14.5276 15.1987 13.6091 15.8052 13.4094C16.0074 13.3295 16.816 15.6856 17.3821 14.7272C17.5842 14.3678 16.1287 14.0483 16.533 13.3295C16.25 13.8487 20.0911 15.8054 19.6059 14.5276C19.3633 13.9285 17.0182 14.3678 17.2203 12.8104C17.1799 13.2097 19.9294 14.4876 19.6463 13.3295C19.5655 13.05 16.8564 13.2497 17.3416 11.9718C17.4225 11.7721 19.7272 13.5292 19.6463 12.2513C19.6059 11.7721 17.1799 12.1315 17.4225 11.0932C17.4225 11.0533 19.9294 12.1315 19.6463 11.0134C19.6059 10.8536 16.8565 11.1731 17.3821 10.2147C17.1395 10.654 20.6572 10.4543 19.6059 9.57575C19.242 9.29621 17.7055 10.654 17.3821 9.45595C17.4225 9.61568 20.4146 9.21634 19.5655 8.37773C19.3633 8.13813 17.4629 9.61568 17.4225 8.65727C17.4225 8.4576 19.9294 7.29951 19.5655 6.70051C19.1207 5.98169 16.6543 7.97839 16.3713 8.09819C14.4709 8.97674 16.3713 8.4576 15.4413 9.57575C14.8752 10.2147 14.4305 9.21634 14.5922 8.77707C14.9157 7.85859 16.8565 7.97839 16.9373 7.37938C16.6543 7.57905 16.3713 7.53912 16.1287 7.37938C16.1691 7.37938 18.1907 7.09984 17.5034 6.82031C17.4225 6.78037 17.1799 6.94011 16.9373 7.05991C16.9777 6.1015 14.3496 6.82031 14.0666 6.86024C15.1583 7.77872 13.177 7.25958 14.3092 7.73879C14.0261 7.77872 13.7835 7.89852 13.5409 8.09819C14.0666 8.13813 13.2579 8.73714 13.2579 8.73714C13.2579 8.73714 12.4492 8.17806 12.9344 8.05826C12.7323 7.85859 12.4492 7.73879 12.1662 7.69885C13.2983 7.21965 11.3171 7.73879 12.4088 6.82031C12.1662 6.82031 9.49763 6.06156 9.53806 7.01998C9.29546 6.90018 9.05286 6.78037 8.972 6.78037C8.32507 7.05991 10.3063 7.33945 10.3467 7.33945C10.1041 7.53912 9.82109 7.53912 9.53806 7.33945C9.61892 7.93846 11.5597 7.81866 11.8832 8.73714C12.0449 9.17641 11.6001 10.1748 11.0341 9.53581C10.0637 8.41766 11.964 8.9368 10.1041 8.05826C9.82109 7.93846 7.35467 5.94176 6.90991 6.66057C6.54601 7.25958 9.05286 8.41766 9.05286 8.61733C8.972 9.57575 7.11207 8.09819 6.90991 8.3378C6.06081 9.17641 9.05286 9.57575 9.0933 9.41601C8.81026 10.614 7.23337 9.25628 6.86947 9.53581C5.81821 10.3744 9.33589 10.614 9.0933 10.1748C9.57849 11.0932 6.86947 10.8137 6.82904 10.9734C6.54601 12.0916 9.05286 11.0134 9.05286 11.0533C9.29546 12.1315 6.86947 11.7322 6.82904 12.2114C6.74818 13.4893 9.05286 11.7721 9.13373 11.9318C9.61893 13.2097 6.90991 13.0101 6.82904 13.2896C6.50558 14.4876 9.29546 13.2097 9.25503 12.7705C9.45719 14.3279 7.11207 13.8886 6.86947 14.4876C6.38428 15.7655 10.2254 13.8087 9.94239 13.2896C10.3467 14.0084 8.89113 14.3279 9.0933 14.6873C9.65936 15.6457 10.468 13.2896 10.6702 13.3695C11.2767 13.5691 10.1041 14.4876 10.3467 14.5675C10.9128 14.8071 11.2767 13.4094 11.4788 13.5691C12.5301 14.288 9.25503 14.9269 10.1041 15.8054C9.05286 16.1249 8.56767 16.5642 7.8803 15.7256C7.67814 15.486 7.11207 15.3262 6.86947 15.5259C7.27381 15.5259 8.0016 16.085 8.28463 16.2846C7.759 16.2846 6.74818 15.8054 6.38428 16.4444C6.82904 16.2447 7.83987 16.4444 8.28463 16.4843C7.79944 16.8837 6.90991 16.6041 7.07164 17.6025C7.31424 16.8038 9.74022 16.2048 10.0233 17.3229C10.3063 16.8038 9.17416 16.5243 8.93156 16.4444C9.09329 16.4044 10.9937 16.4044 10.9937 16.4044C10.9937 16.4044 12.0449 14.3678 12.5301 14.847C13.6622 16.045 10.6702 16.7239 10.5489 16.9635C10.2254 17.7223 12.0853 17.0434 12.0045 17.0035C12.4897 17.4427 10.7915 17.8421 10.7915 17.9619C10.8319 18.8005 12.2066 17.6424 12.2875 17.6424C12.9344 17.8021 11.3575 18.7606 11.398 18.6407C11.2767 19.5193 12.7727 18.3612 12.7323 18.1615C12.894 18.4011 12.894 18.6008 12.6918 18.8804C12.1662 19.7988 12.6514 19.9186 13.2579 20.877C13.8644 19.9186 14.3496 19.8388 13.824 18.8804C13.6622 18.6407 13.6622 18.4011 13.7835 18.1615C13.7431 18.3612 15.2796 19.5193 15.1178 18.6407C15.1178 18.7606 13.5409 17.7622 14.2283 17.6424C14.3092 17.6424 15.6839 18.8005 15.7243 17.9619C15.7243 17.8021 13.9857 17.4427 14.5113 17.0035C14.4709 17.0434 16.2904 17.7622 15.9669 16.9635C15.8861 16.7239 12.8536 16.085 13.9857 14.847C14.4709 14.3279 15.5222 16.4044 15.5222 16.4044C15.5222 16.4044 17.4225 16.4044 17.5842 16.4444C17.3416 16.5243 16.1691 16.8038 16.4926 17.3229C16.7756 16.1648 19.2016 16.8038 19.4442 17.6025C19.6059 16.6041 18.7164 16.9236 18.2312 16.4843C18.6355 16.4843 19.6463 16.2846 20.0911 16.4843ZM16.8969 7.05991C16.6543 7.17971 16.4117 7.25958 16.25 7.21965C16.3713 7.01998 16.6947 6.82031 16.8969 7.05991ZM15.603 6.90017C16.0074 6.98004 16.0074 7.09984 15.603 7.17971C15.1987 7.05991 15.1987 6.98004 15.603 6.90017ZM9.61893 7.05991C9.82109 6.82031 10.1446 7.01998 10.2659 7.21965C10.1041 7.25958 9.86152 7.17971 9.61893 7.05991ZM10.9128 7.17971C10.5085 7.05991 10.5085 6.98004 10.9128 6.90017C11.3171 6.98004 11.3171 7.05991 10.9128 7.17971Z" fill="#3E4347"/>
    </g>
    <defs>
    <clipPath id="clip0_47_13890">
    <rect width="26.2089" height="26.2089" fill="white" transform="translate(0 0.716797)"/>
    </clipPath>
    </defs>
    </svg>       
      `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgIcon }} />;
  };
  
  export default AlbIcon;
  