# SagePay integration POC

This sample application integrates with SagePay online payments service by using Form Integration

### Configuration
In the form.controller.js replace the following properties with your own data

```
$scope.sagePayProperties = {
            vpsProtocol: '3.00', // sage pay protocol version
            txType: 'PAYMENT', // payment type
            vendor: 'custom', // your vendor name
            crypt: '', // this little thing is encoded using AES and data from forms
            key: '55a51621a6648525', // AES encryption key
            url: 'https://test.sagepay.com/gateway/service/vspform-register.vsp' // url to sagepay test form
        };
```

### Usage
Simply execute 

```cmd
mvn spring-boot:run
```
and the application should be running on
```
http://localhost:8080
```
