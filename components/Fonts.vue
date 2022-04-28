<template>
  <div></div>
</template>

<script lang="ts" setup>
import {nextTick} from 'vue'

const fontsEn = `
    @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('NotoSans Regular'), url('../assets/fonts/NotoSans-Regular.woff2') format('woff');
    }

    @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('NotoSans SemiBold'), url('../assets/fonts/NotoSans-SemiBold.woff2') format('woff');
    }

    @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('NotoSans Bold'), url('../assets/fonts/NotoSans-Bold.woff2') format('woff')
    }
`

const lastStyleEl = document.getElementById('foots-style-el')
if (lastStyleEl) {
  document.head.removeChild(lastStyleEl)
}

const styleEl = document.createElement('style')
styleEl.id = 'font-style-el'
styleEl.innerHTML = fontsEn
document.head.appendChild(styleEl)
await nextTick()
</script>
