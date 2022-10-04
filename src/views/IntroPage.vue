<template>
  <Transition name="fade">
    <div class="intro" @click.stop="gohome">
      <div class="inner">
        <!-- <div class="intro-img"></div> -->
        <div class="clock-wrap">
          <div class="clock">
            <div class="hour">
              <div id="hr" class="hr"></div>
            </div>
            <div class="min">
              <div id="mn" class="mn"></div>
            </div>
            <div class="sec">
              <div id="sc" class="sc"></div>
            </div>
          </div>
        </div>
        <p class="intro-txt">miniblog</p>
        <div class="intro-footer"></div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const gohome = () => {
      router.push("/page-miniblog/home/");
    };
    onMounted(() => {
      const deg = 6;
      const hr = document.querySelector("#hr");
      const mn = document.querySelector("#mn");
      const sc = document.querySelector("#sc");
      setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
      });
    });
    return {
      gohome,
    };
  },
};
</script>

<style scoped>
.intro {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border: 7px solid #091921;

  /* background: red; */
}
.inner {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 100px;

  /* background: red; */
}
.intro-img {
  position: relative;
  display: block;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background: url("@/assets/images/introimg.png") no-repeat center;
  background-size: cover;
}

.clock-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  min-height: 700px;
  background-color: #091921;
  border-radius: 50%;
  margin: 0 auto;
}

.clock {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/images/clock.png");
  background-size: cover;
  border: 4px solid #091921;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 -5px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.clock:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  z-index: 10;
}

.clock .hour,
.clock .min,
.clock .sec {
  position: absolute;
}

.clock .hour .hr {
  width: 160px;
  height: 160px;
}

.clock .min .mn {
  width: 190px;
  height: 190px;
}

.clock .sec .sc {
  width: 230px;
  height: 230px;
}

.hr,
.mn,
.sc {
  display: flex;
  justify-content: center;
  /* position: absolute; */
  border-radius: 50%;
}

.hr:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 80px;
  background: #ff105e;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}

.mn:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: #ff105e;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}

.sc:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 150px;
  background: #fff;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
.intro-txt {
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  margin: 50px;
  font-weight: 600;
}
.intro-footer {
  position: relative;
  display: block;
  width: 100%;
  height: 150px;
  border: 2px solid #091921;
  background: #091921;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
