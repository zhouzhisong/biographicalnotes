import img_url from "../assets/logo.png";
const userInfoHead = {
  name: "周志松",
  avatar: img_url,
};
const userInfoBase = {
  birthday: "1990-04-07",
  sex: "男",
  age: "32",
  education: "本科",
  nameFamily: "汉",
  workExperience: "5年",
  phoneNumber: "15517139110",
  email: "15517139110@163.com",
};
const educationList = [
  {
    education: "本科",
    firstSchool: "郑州工业应用技术学院",
    firstMajor: "工程管理",
    firstSchoolExperience: "2012年xx工程管理专业",
    startTime: "2012-9-1",
    endTime: "2016-7-1",
    time: "2012-2016",
  },
];
const workExperienceList = [
  {
    firstJobCompany: "XXXX信息技术有限公司",
    firstJobPostion: "前端开发",
    firstJobStartTime: "2017-02",
    firstJobEndTime: "2018-05",
    time: "2017-2018",
    firstJobDesc1:
      "1.负责相关产品的需求以及前端程序的实现，提供合理的前端架构。改进和优化开发工具、开发流程、和开发框架",
    firstJobDesc2:
      "2.Web前端功能设计、开发和实现，与后台工程师协作，完成数据交互、动态展现;",
    firstJobDesc3:
      "3.从视觉和易用性角度，为网站设计提供改进建议，为网站/客户端的页面提供持续优化方案",
    firstJobDesc4: "",
    firstJobDesc5: "",
  },
  {
    firstJobCompany: "XXXX信息技术有限公司2",
    firstJobPostion: "前端开发2",
    firstJobStartTime: "2017-02",
    firstJobEndTime: "2018-05",
    time: "2019-2022",
    firstJobDesc1:
      "1.负责相关产品的需求以及前端程序的实现，提供合理的前端架构。改进和优化开发工具、开发流程、和开发框架",
    firstJobDesc2:
      "2.Web前端功能设计、开发和实现，与后台工程师协作，完成数据交互、动态展现;",
    firstJobDesc3:
      "3.从视觉和易用性角度，为网站设计提供改进建议，为网站/客户端的页面提供持续优化方案",
    firstJobDesc4: "",
    firstJobDesc5: "",
  },
];
const skillList = [
  { id: "1", skill: "javascript", degree: "50", degreeDesc: "良好" },
  { id: "2", skill: "Html", degree: "50", degreeDesc: "良好" },
  { id: "3", skill: "css", degree: "80", degreeDesc: "良好" },
  { id: "4", skill: "vue.js", degree: "50", degreeDesc: "良好" },
  { id: "5", skill: "typescript", degree: "50", degreeDesc: "良好" },
];
const intention = [{}];
const projectList = [
  {
    projectName: "在线简历制作工具",
    projectDesc: "我的第一个项目",
    projectLink: "阿迪阿斯家电家具",
  },
  {
    projectName: "在线简历制作工具2",
    projectDesc: "我的第二个项目",
    projectLink: "阿迪阿斯家电家具",
  },
];

const evaluations = ["1.可以", "2.不错", "3.我觉得行"];

export default {
  userInfoHead,
  userInfoBase,
  educationList,
  workExperienceList,
  skillList,
  intention,
  projectList,
  evaluations,
};
