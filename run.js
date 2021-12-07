// @ts-check

async function run() {
  console.log('Run this everywhere');

  const stackBeforeAsync = new Error().stack;
  await new Promise((r) => {
    setTimeout(() => {
      const err = new Error('err');
      const wrappedErr = new Error(`WrappedErr: ${err.toString()}`, { cause: err });
      wrappedErr.stack += `\nStack before async:\n${stackBeforeAsync}`;

      console.log(wrappedErr.toString());
      console.log(wrappedErr.stack);

      r();
    });
  });
}

module.exports = { run };
