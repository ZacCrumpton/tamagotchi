let fun = 50;

const funActivity = () => {
  if (fun <= 50) {
    fun += 50;
  } else {
    fun = 100;
  }
};

const lessFunActivity = () => {
  if (fun <= 98) {
    fun += 2;
  } else {
    fun = 100;
  }
};

const getPlay = () => fun;

export default { funActivity, lessFunActivity, getPlay };
