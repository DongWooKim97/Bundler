// ESM -> node에서 안됨
// CommonJS --- win!

// import autoprefixer from 'autoprefixer'
// const autoprefixer = 

// export {
//   plugins : [
//     autoprefixer
//   ]
// }

module.exports = {
  plugins: [require("autoprefixer")],
};