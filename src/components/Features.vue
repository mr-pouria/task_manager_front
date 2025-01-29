<script>
export default {
  name: "Features"
}
</script>

<template>
  <section>
    <div class="features-head">
      <h2>قابلیت‌های <b>تسکتاپ</b></h2>
    </div>
    <div class="features-content">
      <div class="list-of-feature">
        <div class="item">
          <div class="item-icon">
            <span></span>
          </div>
          <div class="inner-item">
            <h2>قابلیت</h2>
            <p>توضیخ کوتاه از این قابلیت</p>
          </div>
        </div>
        <div class="item">
          <div class="item-icon">
            <span></span>
          </div>
          <div class="inner-item">
            <h2>قابلیت</h2>
            <p>توضیخ کوتاه از این قابلیت</p>
          </div>
        </div>
        <div class="item">
          <div class="item-icon">
            <span></span>
          </div>
          <div class="inner-item">
            <h2>قابلیت</h2>
            <p>توضیخ کوتاه از این قابلیت</p>
          </div>
        </div>
        <div class="item">
          <div class="item-icon">
            <span></span>
          </div>
          <div class="inner-item">
            <h2>قابلیت</h2>
            <p>توضیخ کوتاه از این قابلیت</p>
          </div>
        </div>
        <div class="item">
          <div class="item-icon">
            <span></span>
          </div>
          <div class="inner-item">
            <h2>قابلیت</h2>
            <p>توضیخ کوتاه از این قابلیت</p>
          </div>
        </div>
      </div>
      <div class="feature-pic">

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
* {
  transition: all 0.2s ease-in-out;
}
  section {
    border-radius: 5px;
    margin: 80px auto 0 auto ;
    width: 80%;
    padding: 15px;
    background: var(--lod);
    .features-head {
      h2 {
        text-align: center;
        font-size: 1.1em;
        color: var(--lodReversed);
        font-family: "irsans-bold";
        b {
          font-size: 1.1em;
          font-weight: normal;
          font-family: "irsans-bold";
          color: var(--primary);
        }
      }
    }
    .features-content {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      .list-of-feature {
        width: 100%;
        .item {
          background: var(--baseColor);
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          display: flex;
          gap: 10px;
          cursor: pointer;
          .inner-item {
            h2 {
              font-size: 1.1em;
              font-family: "irsans-bold";
              margin-bottom: 5px;
              color: var(--lightTextColor);
            }
            p {
              font-size: 0.7em;
              font-family: "irsans-regular";
              color: var(--lightTextColor);
            }
          }
          .item-icon {
            span {
              border-radius: 50px;
              display: block;
              width: 50px;
              height: 50px;
              background: var(--primary);
            }
          }
        }
      }
      .feature-pic {
        width: 100%;
        background: var(--primary);
        opacity: 0.4;
        border-radius: 5px;
      }
    }
  }
</style>