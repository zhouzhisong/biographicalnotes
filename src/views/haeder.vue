<template>
  <div class="header">
    <div class="header-content">
      <h2>周志松</h2>
      <nav>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="work">WORK EXPERIENCE</router-link>
        <router-link to="education">EDUCATION</router-link>
        <router-link to="contact">CONTACT</router-link>
      </nav>
      <leftSideTool @exportPDF="exportPDF" />
    </div>
  </div>
</template>
<script setup >
import leftSideTool from '../components/leftSideTool.vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
const exportPDF = () => {
  ElMessageBox.confirm(
    '确定导出PDF文件?',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      const htmlElement = document.getElementById('PDF')
      downloadPdf(htmlElement)
      ElMessage({
        type: 'success',
        message: '导出成功',
      })
    })
    .catch(() => {

    })
}
const downloadPdf = () => {
  return new Promise((resolve, reject) => {
    const htmlElement = document.getElementById('PDF')
    let w = htmlElement.getBoundingClientRect().width,   // 获得该容器的宽 包含了 padding 和 border-width
      h = htmlElement.getBoundingClientRect().height,    // 获得该容器的高 包含了 padding 和 border-width
      offsetTop = htmlElement.offsetTop,   // 获得该容器到文档顶部的距离
      offsetLeft = htmlElement.offsetLeft,   // 获得该容器到文档最左的距离
      canvas = document.createElement('canvas'),
      abs = 0,
      win_i = document.documentElement.clientWidth,   // 获得当前可视窗口的宽度（不包含滚动条）
      win_o = window.innerWidth;    // 获得当前窗口的宽度（包含滚动条）
    if (win_o > win_i) {
      abs = (win_o - win_i) / 2;    // 获得滚动条长度的一半
    }
    console.log(htmlElement, w, h, offsetLeft, offsetTop, win_i, win_o, abs);

    canvas.width = w * 4;    // 将画布宽&&高放大4倍
    canvas.height = h * 4;

    let context = canvas.getContext("2d");
    context.scale(4, 4);
    // context.translate(-offsetLeft - abs, -offsetTop); //context上下文最初的原点是（0,0），translate(x,y)即把原点平移到(x,y)  ,不知道为什么要平移

    html2canvas(htmlElement, {
      useCORS: true,
      allowTaint: true,//类型 boolean，默认 false，设置是否允许跨域。需要注意的是，前端即便设置为 ture 也不能跨域，需要后端设置 header 才能跨域(需要后端在response 的 header 中带上 Access-Control-Allow-Credentials 属性。同时前端的 Image 也要设置 crossOrigin 属性为 Anonymous)。
      canvas,
      taintTest: true,// 类型 boolean，默认 true，在渲染前是否检查图片
      dpi: 172,//导出pdf清晰度
    }).then(canvas => {


      let contentWidth = canvas.width,
        contentHeight = canvas.height,
        //一页pdf显示html页面生成的canvas高度
        pageHeight = contentWidth / 592.28 * 841.89,
        //未生成pdf的html页面高度
        leftHeight = contentHeight,
        //页面偏移
        position = 0,
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        imgWidth = 595.28,
        imgHeight = 592.28 / contentWidth * contentHeight - 50,
        pageData = canvas.toDataURL('image/jpeg', 1.0),
        pdf = new jsPDF('', 'pt', 'a4');
      //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      //当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {    // 分页
        while (leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
          leftHeight -= pageHeight;
          position -= 841.89;
          //避免添加空白页
          if (leftHeight > 0) {
            pdf.addPage();
          }
        }
      }
      pdf.save('简历' + '.pdf');
    })
  })
}


</script>



<style lang='scss' scoped>
.header {
  width: 100%;
  min-width: 800px;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid hsla(0, 0%, 65%, .397);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .07), 0 6px 20px 0 rgba(0, 0, 0, .03);

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1400px;
    max-width: 100%;
    padding: 10px 30px;

    h2 {
      font-size: 1.1rem;
      letter-spacing: 1px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      z-index: 100;
      text-transform: uppercase;
    }

    nav {

      a {
        font-size: 1.1rem;
        letter-spacing: 1px;
        font-weight: 600;
        color: #2b2d42;
        margin: 15px;
      }
    }
  }
}
</style>