function AddressModel() {
    var self = this;
    self.province = ko.observable("江苏省");
    self.city = ko.observable("苏州市");
    self.district = ko.observable("工业园区");
    self.street = ko.observable("星湖街328号");
    self.address = ko.observable();

    self.format = function () {
        if (self.province() && self.city() && self.district() && self.street()) {
            var address = self.province() + ' ' + self.city() + ' ' + self.district() + ' ' + self.street();
            self.address(address);
        } else {
            alert('请提供完整信息。');
        }
    };

    self.format();
}

ko.applyBindings(new AddressModel());