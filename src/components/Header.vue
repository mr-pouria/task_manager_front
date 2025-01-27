<script>
export default {
  name: "Header"
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="head-box">
        <div class="logo" @click="this.$router.push('/')">
         <span>
           <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.9 60.9"><g id="Layer_1-2"><rect
               width="60.9" height="60.9" rx="9.86" ry="9.86" style="fill:#00a6fb;"/><path
               d="M46.55,48.75h-14.35V12.16h14.35c.97,0,1.75-.78,1.75-1.75s-.78-1.75-1.75-1.75H14.35c-.97,0-1.75.78-1.75,1.75s.78,1.75,1.75,1.75h14.35v36.59h-14.35c-.97,0-1.75.78-1.75,1.75s.78,1.75,1.75,1.75h32.2c.97,0,1.75-.78,1.75-1.75s-.78-1.75-1.75-1.75Z"
               style="fill:#efefef;"/></g></svg>
         </span>
        </div>
        <div class="header-text" @click="this.$router.push('/')">
          <h1>تسکتاپ</h1>
          <h2>برنامه مدیریت وظیفه</h2>
        </div>
      </div>
      <div class="head-box">
        <ul>
          <li>درخواست</li>
          <li>قابلیت ها</li>
          <li>مشاوره</li>
          <li>ارتباط باما</li>
        </ul>
      </div>
      <div class="head-box">
        <button>ورود</button>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">

.header {
  background: var(--lod);
  padding: 15px 25px;
  border-radius: 6px;
  &__container {
    display: flex;
    .head-box:first-child {
      justify-content: start;

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        span {
          display: flex;
          width: 40px;
        }
      }

      .header-text {
        margin-right: 20px;
        cursor: pointer;
        h1 {
          color: var(--lodReversed);
          font-family: 'irsans-bold';
          font-size: 1.3em;
          text-align: center;
        }

        h2 {
          color: var(--lightTextColor);
          font-family: 'irsans-regular';
          font-size: 0.5em;
          text-align: center;
        }
      }
    }
    .head-box {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        display: flex;
        gap: 30px;
        li {
          color: var(--lodReversed);
          cursor: pointer;
          font-family: 'irsans-demiBold';
          font-size: 0.8em;
        }
      }
      button {
        padding: 8px 22px;
        border: none;
        border-radius: 6px;
        font-family: 'irsans-bold';
        cursor: pointer;
        background: var(--primary);
        color: var(--lod);
      }
    }
    .head-box:last-child {
      justify-content: end;
    }
  }
}

</style>