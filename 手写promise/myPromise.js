function Promise(executor) {
    var self = this;
    self.status = "pending";
    self.data = undefined;
    self.onResolvedCallbackList = [];
    self.onRejectedCallbackList = [];

    function resolve(value) {
        setTimeout(function () {
            console.log('myPromise')
            if (self.status === 'pending') {
                self.status = "resolved";
                self.data = value;
                for (let index = 0; index < self.onResolvedCallbackList.length; index++) {
                    self.onResolvedCallbackList[index](value);
                }
            }
        }, 0);
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.status = "rejected";
            self.data = reason;
            for (let index = 0; index < self.onRejectedCallbackList.length; index++) {
                self.onRejectedCallbackList[index](reason);
            }
        }
    }
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

Promise.prototype.then = function (onResolevdCallback, onRejectedCallback) {
    this.onResolvedCallbackList.push(onResolevdCallback);
    this.onRejectedCallbackList.push(onRejectedCallback);
}

var p = new Promise(function (resolve, reject) {
    console.log(23333)
    // setTimeout(function () {
        resolve('success')
    // }, 1000)
}).then(function (data) {
    console.log('s:', data);
}, function (error) {
    console.log('err:', error);
});
console.log(111111)