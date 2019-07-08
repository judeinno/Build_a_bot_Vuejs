const applyStyle = (element, binding) => {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
};

// We can bind using the lifecycle hooks as shown below Or;
// export default {
//   bind: (element, binding) => {
//     applyStyle(element, binding);
//   },
//   update: (element, binding) => {
//     applyStyle(element, binding);
//   },
// };

// Since the bind and update life cycle hooks are used sooo commonly we can
//  Just export the function applyStyle and the bind and update
//  will still be used
export default applyStyle;
