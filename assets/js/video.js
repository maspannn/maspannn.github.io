const agro = [
    {
      "poster": "https://i.pinimg.com/736x/8a/48/6d/8a486db0697463decea88b7f8059f3d3.jpg",
      "link": "https://v.pinimg.com/videos/mc/720p/fc/70/71/fc7071f49805eb564b6f5493c56bb3d8.mp4"
    },
    {
      "poster": "https://i.pinimg.com/736x/46/ab/75/46ab75c1556eaefde46f04699bc43b78.jpg",
      "link": "https://v.pinimg.com/videos/mc/720p/0b/eb/03/0beb03c8730ff6ca6beae1d8e1b80da4.mp4"
    },
    {
      "poster": "https://i.pinimg.com/736x/4d/5a/c8/4d5ac802c364d3daa1db285c66288119.jpg",
      "link": "https://v.pinimg.com/videos/mc/720p/76/e2/89/76e28943419dec66b262d2ba93783429.mp4"
    },
    {
      "poster": "https://i.pinimg.com/736x/1b/b5/15/1bb5157a6993161fc92749db4cea80a3.jpg",
      "link": "https://v.pinimg.com/videos/mc/720p/06/f6/ea/06f6eaf25bb487f0942ee7b5f6c177fc.mp4"
    },
    {
      "poster": "https://i.pinimg.com/736x/12/ab/3b/12ab3b16730940d95fbd4ad7a24bc189.jpg",
      "link": "https://v.pinimg.com/videos/mc/720p/c3/a3/7a/c3a37ae849221e5caae8c469d17541d3.mp4"
    },
    {
      "poster": "https://i.pinimg.com/736x/fa/bc/4d/fabc4d05115fc19cb99613defe683483.jpg",
      "link": "https://v.pinimg.com/videos/mc/720p/89/38/68/893868acd8bfa083c48062dfab62d05b.mp4"
    },
]

function randomagro() {
  let random = agro[Math.floor(Math.random() * agro.length)];
  video.innerHTML = `<video id="myVideo" width="100%" height="100%" controls controlsList="noplaybackrate nodownload" preload="none"poster="${random.poster}"><source src="${random.link}" type="video/mp4"></video>`;
  agro.innerHTML = random.agro;
}

randomagro();

document.querySelector("button.tombolagro").addEventListener('click', randomagro)