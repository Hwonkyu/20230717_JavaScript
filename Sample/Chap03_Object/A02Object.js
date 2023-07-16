console.log('---------------- [335] Object -----------------');

const obj = {
  name: 'NolBu',
  address: 'Seoul',
  info: function () {
    console.log(this.name + ' / ' + this.address);
  },
};
