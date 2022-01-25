<template>
  <q-header elevated class="bg-indigo">
    <q-toolbar>
      <q-toolbar-title>
        电量数据
        <span style="font-size: 16px">(星恒48V24Ah)</span>
      </q-toolbar-title>
      <q-btn flat round dense>
        <q-icon name="settings" @click="openDialog = !openDialog" />
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page style="padding: 12px">
      <div id="main" style="width: 100%; height: 385px; margin-top: 10px"></div>

      <q-card style="margin-top: 10px">
        <q-card-section class="q-px-xs q-pt-sm q-pb-none">
          <div
            class="row"
            style="text-align: center; font-size: 18px; color: grey"
          >
            <div
              class="col"
              style="color: red"
              v-if="percentage(voltage) >= 0 && percentage(voltage) < 10"
            >
              剩余电量 <q-icon name="ev_station" />
            </div>
            <div
              class="col"
              style="color: orange"
              v-if="percentage(voltage) > 10 && percentage(voltage) < 30"
            >
              剩余电量 <q-icon name="ev_station" />
            </div>
            <div class="col" v-if="percentage(voltage) >= 30">
              剩余电量 <q-icon name="ev_station" />
            </div>
            <div class="col">剩余电流 <q-icon name="text_rotation_none" /></div>
            <div class="col">剩余里程 <q-icon name="directions_bike" /></div>
          </div>

          <div class="row" style="text-align: center; font-size: 14px">
            <div
              class="col"
              style="color: red"
              v-if="percentage(voltage) >= 0 && percentage(voltage) < 10"
            >
              <b style="font-size: 30px">{{ percentage(voltage) }}</b> %
            </div>
            <div
              class="col"
              style="color: orange"
              v-if="percentage(voltage) > 10 && percentage(voltage) < 30"
            >
              <b style="font-size: 30px">{{ percentage(voltage) }}</b> %
            </div>
            <div class="col" v-if="percentage(voltage) >= 30">
              <b style="font-size: 30px">{{ percentage(voltage) }}</b> %
            </div>
            <div class="col">
              <b style="font-size: 30px">{{ ampere(voltage) }}</b> Ah
            </div>
            <div class="col">
              <b style="font-size: 30px">{{ kilometer(voltage) }}</b> KM
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div class="row" style="text-align: center; margin-top: 20px" v-if="sliderType === '电压'">
        <div class="col-9">
          <q-linear-progress
            stripe
            size="56px"
            :value="percentage(voltage) / 100"
            :color="color"
          >
            <div class="absolute-full flex flex-center">
              <q-slider
                v-model="voltage"
                color="indigo"
                :min="43"
                :step="0.5"
                :max="53.85"
              />
            </div>
          </q-linear-progress>
        </div>
        <div class="col-3">
          <q-input
            filled
            color="purple"
            v-model="voltage"
            label="电压(V)"
            style="font-size: 18px"
          />
        </div>
      </div>

      <div class="row" style="text-align: center; margin-top: 20px" v-else-if="sliderType === '电量'">
        <div class="col-9">
          <q-linear-progress
            stripe
            size="56px"
            :value="( voltage - 43) / ( 53.85 - 43 )"
            color="indigo"
          >
            <div class="absolute-full flex flex-center">
              <q-slider
                v-model="power"
                :color="color"
                :min="0"
                :step="10"
                :max="100"
              />
            </div>
          </q-linear-progress>
        </div>
        <div class="col-3">
          <q-input
            filled
            disabled
            :color="color"
            v-model="power"
            label="电量(%)"
            style="font-size: 18px"
          />
        </div>
      </div>

      <p
        style="
          text-align: center;
          font-size: 16px;
          width: 90%;
          margin-left: 5%;
          margin-top: 40px;
          color: grey;
        "
      >
        注意：显示数据仅供参考，请结合实际情况！
      </p>
    </q-page>
  </q-page-container>

  <q-dialog v-model="openDialog" style="z-index: 99">
    <q-card>
      <q-card-section>
        <div class="text-h6">配置</div>
      </q-card-section>
      <q-card-section class="text-body1 q-pt-none">
        <q-list dense style="min-width: 300px">
          <q-item>
            <q-item-section side>
              <q-icon color="purple" name="dark_mode" />
            </q-item-section>
            <q-item-section>夜间模式</q-item-section>
            <q-item-section side
              ><q-toggle
                v-model="openDark"
                color="indigo"
                class="q-pa-none"
                @click="toggleDark"
            /></q-item-section>
          </q-item>
          <q-separator spaced inset />
          <q-item>
            <q-item-section side>
              <q-icon color="orange" name="linear_scale" />
            </q-item-section>
            <q-item-section>滑块类型</q-item-section>
            <q-item-section side
              ><q-select dense filled v-model="sliderType" :options="['电压', '电量']" style="min-width: 100px" /></q-item-section>
          </q-item>
          <q-separator spaced inset />
          <q-item>
            <q-item-section side>
              <q-icon color="indigo" name="change_circle" />
            </q-item-section>
            <q-item-section>电池类型</q-item-section>
            <q-item-section side
              ><q-select dense disable filled style="min-width: 100px" /></q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="indigo" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useQuasar } from 'quasar';

const option = {
  tooltip: {
    // 设置tip提示
    trigger: 'axis',
    formatter: '电压：{c} V<br/>里程：{b} KM',
    borderWidth: 0,
    backgroundColor: 'white',
    textStyle: {
      color: 'black',
      fontSize: 16,
    },
    extraCssText: 'opacity: 0.85;',
  },
  color: ['#808080'], // 设置区分（每条线是什么颜色，和 legend 一一对应）
  xAxis: {
    // 设置x轴
    type: 'category',
    boundaryGap: false, // 坐标轴两边不留白
    data: [65.2, 58.7, 52.2, 45.7, 39.1, 32.6, 26.1, 19.6, 13.0, 6.5, 0.0],
    name: '剩余里程(KM)', // X轴 name
    nameTextStyle: {
      // 坐标轴名称的文字样式
      color: '#3f51b5',
      fontSize: 16,
      padding: [75, 0, 0, -80],
    },
    axisLine: {
      // 坐标轴轴线相关设置。
      lineStyle: {
        color: '#808080',
      },
    },
  },
  yAxis: {
    name: '电压(V)',
    nameTextStyle: {
      color: '#3f51b5',
      fontSize: 16,
      padding: [0, 0, 5, 0],
    },
    axisLine: {
      lineStyle: {
        color: '#808080',
      },
    },
    type: 'value',
    scale: true,
  },
  visualMap: {
    show: false,
    //lt（小于），gt（大于），lte（小于等于），gte（大于等于）
    pieces: [
      {
        gt: 43,
        lte: 47.44,
        color: 'red',
      },
      {
        gt: 47.44,
        lte: 49.14,
        color: 'orange',
      },
      {
        gt: 49.14,
        color: 'green',
      },
    ],
    seriesIndex: 0,
  },
  series: [
    {
      name: '电压(V)',
      data: [
        53.85, 52.31, 51.77, 51.29, 50.86, 50.31, 49.73, 49.14, 48.42, 47.44,
        43.0,
      ],
      type: 'line', // 类型为折线图
      markLine: {
        symbol: ['none', 'none'],
        label: { show: false },
        data: [
          { xAxis: 2 },
          { xAxis: 4 },
          { xAxis: 6 },
          { xAxis: 8 },
          { xAxis: 10 },
        ],
      },
      itemStyle: {
        color: '#8AE09F',
      },
      lineStyle: {
        // 线条样式 => 必须使用normal属性
        normal: {
          color: '#8AE09F',
          width: 5,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 10,
          shadowOffsetY: 5,
        },
      },
      areaStyle: { opacity: 0.3 },
      emphasis: {
        itemStyle: {
          shadowBlur: 15,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      smooth: true,
    },
  ],
};

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const voltage = ref(53.85);
    const power = ref(100);
    const color = ref('green');
    const openDialog = ref(false);
    const openDark = ref();
    const $q = useQuasar();
    const sliderType = ref('电压');

    watch(voltage, (newVal) => {
      if (percentage(newVal) >= 0 && percentage(newVal) < 10)
        color.value = 'red';
      else if (percentage(newVal) > 10 && percentage(newVal) < 30)
        color.value = 'orange';
      else color.value = 'green';
    });

    watch(sliderType, () => {
      voltage.value = 53.85;
      power.value = 100;
    });

    watch(power, (newVal) => {
      switch(newVal) {
        case 100: 
          voltage.value = 53.85;
          break;
        case 90: 
          voltage.value = 52.31;
          break;
        case 80: 
          voltage.value = 51.77;
          break;
        case 70: 
          voltage.value = 51.29;
          break;
        case 60: 
          voltage.value = 50.86;
          break;
        case 50: 
          voltage.value = 50.31;
          break;
        case 40: 
          voltage.value = 49.74;
          break;
        case 30: 
          voltage.value = 49.14;
          break;
        case 20: 
          voltage.value = 48.42;
          break;
        case 10: 
          voltage.value = 47.45;
          break;
        case 0: 
          voltage.value = 43;
      }
    });

    function numFilter(value: any) {
      // 截取当前数据到小数点后两位
      let realVal = parseFloat(value).toFixed(2);
      return parseFloat(realVal);
    }
    function percentage(value: any) {
      // 根据电压计算百分比
      switch (true) {
        case value < 43:
          return 0;
        case value < 47.44:
          return numFilter(((value - 43) / 4.44) * 10);
        case value < 48.42:
          return numFilter(((value - 47.44) / 0.98) * 10 + 10);
        case value < 49.14:
          return numFilter(((value - 48.42) / 0.72) * 10 + 20);
        case value < 49.74:
          return numFilter(((value - 49.14) / 0.6) * 10 + 30);
        case value < 50.31:
          return numFilter(((value - 49.74) / 0.57) * 10 + 40);
        case value < 50.86:
          return numFilter(((value - 50.31) / 0.55) * 10 + 50);
        case value < 51.29:
          return numFilter(((value - 50.86) / 0.43) * 10 + 60);
        case value < 51.77:
          return numFilter(((value - 51.29) / 0.48) * 10 + 70);
        case value < 52.31:
          return numFilter(((value - 51.77) / 0.54) * 10 + 80);
        case value <= 53.85:
          return numFilter(((value - 52.31) / 1.54) * 10 + 90);
        default:
          return 0;
      }
    }
    function ampere(value: any) {
      // 根据百分比计算电流
      return numFilter(23.3 * (percentage(value) / 100));
    }
    function kilometer(value: any) {
      // 根据百分比计算里程
      return numFilter(65.2 * (percentage(value) / 100));
    }
    const toggleDark = () => {
      $q.dark.set(openDark.value);
    };

    onMounted(() => {
      openDark.value = $q.dark.isActive;
      var myChartDom = document.getElementById('main') as HTMLElement;
      var myChart = echarts.init(myChartDom as any);
      option && myChart.setOption(option as any);

      myChart.on('click', function (params: any) {
        // 在用户点击后控制台打印数据的名称
        console.log(params);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (params.seriesName === '电压(V)' && params.value) {
          // eslint-disable-next-line
          voltage.value = params.value;
        }
      });
      watch(voltage, (newValue) => {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: 10 - Math.round((kilometer(newValue) / 65.2) * 10),
        });
      });
    });

    return {
      voltage,
      power,
      numFilter,
      percentage,
      ampere,
      kilometer,
      color,
      openDialog,
      openDark,
      toggleDark,
      sliderType,
    };
  },
});
</script>
