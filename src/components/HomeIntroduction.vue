<script>
export default {
  name: "HomeIntroduction",
  props: ['heightEffect']
}
</script>

<template>
  <section :style="{ height: `calc(100vh - ${heightEffect}px)` }">
    <div class="introduction-wrapper">
      <div class="main-head">
        <h1>اولین و بزرگترین <b>نرم افزار</b> ایرانی برای مدیریت و ارزیابی</h1>
        <h1>عملکرد سازمان‌ها و شرکت‌ها</h1>
      </div>
      <div class="sub-head">
        <p>
          برنامه ما ابزار هوشمندی برای مدیریت زمان و بهبود عملکرد است که به شما کمک می‌کند
          وظایف خود را سازماندهی کرده و بهره‌وری‌تان را افزایش دهید.
        </p>
        <button>
          درخواست سرویس
          <span>
       <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.69 23.69"><g id="Layer_1-2"><circle
           cx="11.84" cy="11.84" r="11.06"
           style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.57px;"/><line
           x1="5.53" y1="11.84" x2="18.16" y2="11.84"
           style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.57px;"/><polyline
           points="10.77 17.08 5.53 11.84 10.77 6.61"
           style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.57px;"/></g></svg>
          </span>
        </button>
      </div>
    </div>
    <div class="carousel-wrapper">
      <div class="carousel-header">
        <h5>دمویی از نرم افزار</h5>
      </div>
      <div class="carousel-content">

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .introduction-wrapper {
    width: 100%;
    margin-top: 20px;
    .main-head {
      padding: 10px;

      h1 {
        margin-bottom: 10px;
        text-align: center;
        font-size: 1.3em;
        font-family: 'irsans-bold';
        color: var(--lodReversed);

        b {
          color: var(--primary);
        }
      }
    }

    .sub-head {
      width: 40%;
      margin: auto;
      p {
        margin-bottom: 20px;
        font-size: 0.8em;
        text-align: center;
        font-family: 'irsans-regular';
      }
      button {
        position: relative;
        margin: auto;
        width: 250px;
        display: block;
        padding: 8px;
        background: var(--primary);
        border: none;
        color: var(--lod);
        font-size: 0.8em;
        cursor: pointer;
        border-radius: 5px;
        z-index: 1;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        &:hover {
          scale: 1.035;
        }
        span {
          position: absolute;
          width: 20px;
          height: 20px;
          display: block;
          left: 15px;
          top: 50%;
          transform: translate(0% , -50%);
        }
      }
    }
  }

  .carousel-wrapper {
    flex: 1;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .carousel-header {
      width: 40%;
      transform: translateY(50%);
      margin: auto;
      h5 {
        padding: 10px;
        background: var(--lod);
        font-size: 1em;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.4);
        color: var(--primary);
        font-family: 'irsans-bold';
      }
    }
    .carousel-content {
      flex: 1;
      background: #3d3d3d;
      height: 100%;
      width: 80%;
      margin: auto;
      border-radius: 5px;
    }
  }
}
</style>