angular.module('sagePayPoc')
    .controller('FormController', function ($scope, $sce) {
        'use strict';

        $scope.sagePayData = {
            txCode: 'TxCode-123134726347921',
            description: 'Some description of the purchase',
            currency: 'GBP',
            amount: '14.00',
            billing: {
                surname: 'Doe',
                firstName: 'John',
                address: 'Some address',
                city: 'Gotham',
                postcode: 'GM-4003',
                country: 'GB'
            },
            delivery: {
                surname: 'Doe',
                firstName: 'John',
                address: 'Some address',
                city: 'Gotham',
                postcode: 'GM-4003',
                country: 'GB'
            }
        };

        $scope.sagePayProperties = {
            vpsProtocol: '3.00',
            txType: 'PAYMENT',
            vendor: 'protx',
            crypt: '',
            key: '55a51621a6648525',
            url: $sce.trustAsResourceUrl('https://test.sagepay.com/gateway/service/vspform-register.vsp')
        };

        $scope.urlData = {
            vendorCode: 'VendorTxCode',
            amount: 'Amount',
            currency: 'Currency',
            description: 'Description',
            successUrl: 'SuccessURL',
            failureUrl: 'FailureURL',
            billingSurname: 'BillingSurname', // 20
            billingFirstNames: 'BillingFirstnames', // 20
            billingAddress: 'BillingAddress1', //100
            billingCity: 'BillingCity', // 40
            billingPostCode: 'BillingPostCode', // 10
            billingCountry: 'BillingCountry', // 2
            deliverySurname: 'DeliverySurname', // 20
            deliveryFirstNames: 'DeliveryFirstnames', // 20
            deliveryAddress: 'DeliveryAddress1', //100
            deliveryCity: 'DeliveryCity', // 40
            deliveryPostCode: 'DeliveryPostCode', // 10
            deliveryCountry: 'DeliveryCountry' // 2
        };

        function createSageDataEncryptPart() {
            return $scope.urlData.vendorCode + '=' + $scope.sagePayData.txCode + '&' +
                $scope.urlData.amount + '=' + $scope.sagePayData.amount + '&' +
                $scope.urlData.currency + '=' + $scope.sagePayData.currency + '&' +
                $scope.urlData.successUrl + '=' + 'http://localhost:8080/#/success' + '&' +
                $scope.urlData.failureUrl + '=' + 'http://localhost:8080/#/error';
        }

        function createBillingEncryptPart() {
            return $scope.urlData.billingSurname + '=' + $scope.sagePayData.billing.surname + '&' +
                $scope.urlData.billingFirstNames + '=' + $scope.sagePayData.billing.firstName + '&' +
                $scope.urlData.billingAddress + '=' + $scope.sagePayData.billing.address + '&' +
                $scope.urlData.billingCity + '=' + $scope.sagePayData.billing.city + '&' +
                $scope.urlData.billingPostCode + '=' + $scope.sagePayData.billing.postcode + '&' +
                $scope.urlData.billingCountry + '=' + $scope.sagePayData.billing.country;
        }

        function createDeliveryEncryptPart() {
            return $scope.urlData.deliverySurname + '=' + $scope.sagePayData.delivery.surname + '&' +
                $scope.urlData.deliveryFirstNames + '=' + $scope.sagePayData.delivery.firstName + '&' +
                $scope.urlData.deliveryAddress + '=' + $scope.sagePayData.delivery.address + '&' +
                $scope.urlData.deliveryCity + '=' + $scope.sagePayData.delivery.city + '&' +
                $scope.urlData.deliveryPostCode + '=' + $scope.sagePayData.delivery.postcode + '&' +
                $scope.urlData.deliveryCountry + '=' + $scope.sagePayData.delivery.country;
        }

        function encrypt() {
            return '@' + CryptoJS.AES.encrypt(createSageDataEncryptPart() + '&' + createBillingEncryptPart() + '&' + createDeliveryEncryptPart(), $scope.sagePayProperties.key);
        }

        $scope.$watch('sagePayData', function () {
            $scope.sagePayProperties.crypt = encrypt();
        }, true);

    });
