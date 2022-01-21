<template>
  <q-page style="padding: 12px; background-color: white">
    <div
      id="main"
      style="
        width: 100%;
        height: 385px;
        background-color: white;
        margin-top: 10px;
      "
    ></div>

    <div
      class="row"
      style="
        text-align: center;
        font-size: 18px;
        color: grey;
        margin-top: 30px;
        background-color: white;
      "
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

    <div
      class="row"
      style="text-align: center; font-size: 14px; background-color: white"
    >
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

    <div
      class="row"
      style="text-align: center; margin-top: 20px; background-color: white"
    >
      <div class="col-9">
        <q-linear-progress
          stripe
          size="56px"
          :value="percentage(voltage) / 100"
          color="green"
        >
          <div class="absolute-full flex flex-center">
            <q-slider
              v-model="voltage"
              color="purple"
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'PageIndex',
  components: {},
  data() {
    return {
      option: {
        tooltip: {
          // 设置tip提示
          trigger: 'axis',
          formatter: '电压：{c} V<br/>里程：{b} KM',
          borderWidth: 0,
          backgroundColor: 'white',
          textStyle: {
            color: 'black',
            fontSize: 16
          },
          extraCssText: 'opacity: 0.85;'
        },
        color: ['#808080'], // 设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: {
          // 设置x轴
          type: 'category',
          boundaryGap: false, // 坐标轴两边不留白
          data: [
            65.2, 58.7, 52.2, 45.7, 39.1, 32.6, 26.1, 19.6, 13.0, 6.5, 0.0,
          ],
          name: '剩余里程(KM)', // X轴 name
          nameTextStyle: {
            // 坐标轴名称的文字样式
            color: '#1976D2',
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
            color: '#1976D2',
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
          pieces: [{
              gt: 43,
              lte: 47.44,
              color: 'red',
          }, {
              gt: 47.44,
              lte: 49.14,
              color: 'orange',
          },{
              gt: 49.14,
              color: 'green',
          }
          ],
          seriesIndex: 0
        },
        series: [
          {
            name: '电压(V)',
            data: [
              53.85, 52.31, 51.77, 51.29, 50.86, 50.31, 49.73, 49.14, 48.42,
              47.44, 43.0,
            ],
            type: 'line', // 类型为折线图
            markLine: {
              symbol: ['none', 'none'],
              label: {show: false},
              data: [
                {xAxis: 2},
                {xAxis: 4},
                {xAxis: 6},
                {xAxis: 8},
                {xAxis: 10},
              ]
            },
            itemStyle: {
                color: '#8AE09F'
            },
            lineStyle: {
              // 线条样式 => 必须使用normal属性
              normal: {
                color: '#8AE09F',
                width: 5,
                shadowColor: 'rgba(0,0,0,0.3)',
                shadowBlur: 10,
                shadowOffsetY: 5
              },
            },
            areaStyle: { opacity: 0.3 },
            emphasis: {
              itemStyle: {
                shadowBlur: 15,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            smooth: true
          },
        ],
      },
    };
  },
  mounted() {
    var myChartDom = document.getElementById('main') as HTMLCanvasElement;
    var myChart = echarts.init(myChartDom);
    this.option && myChart.setOption(this.option as any);
    var app = 0;
    setInterval(function () {
      // 显示 tooltip
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app
      });
      app = app + 1;
      if(app === 11)
        app = 0;
    }, 2000);
  },
  setup() {
    const voltage = ref(53.85);
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

    return {
      voltage,
      numFilter,
      percentage,
      ampere,
      kilometer,
    };
  },
});
</script>
