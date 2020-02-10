var QRCode = require('qrcode')
var os = require('os');
var ifaces = os.networkInterfaces();

exports.hostIP = () => {
    let ip = '';

    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;
        
        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }
        
            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                console.log('UP : ' + ifname + ':' + alias, iface.address);
            } else {
                // this interface has only one ipv4 adress
                console.log('DOWN : ' + ifname, iface.address);
                ip = iface.address;
            }
            ++alias;
        });
    });
    return ip;
}
 
exports.hostQR = async () => {
    let ip = this.hostIP();
    ip = ip + ':9020/'
    const qr = await QRCode.toDataURL(ip, { type: 'png', ec_level: 'H', size: 10, margin: 0 });
    console.log(qr);
    return qr;
}