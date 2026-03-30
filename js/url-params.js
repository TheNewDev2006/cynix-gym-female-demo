(function() {
    'use strict';
    
    var params = new URLSearchParams(window.location.search);
    
    var name = params.get('name') || 'Cynix Inc';
    var phone = params.get('phone') || '0725582444';
    var address = params.get('address') || '237, Jampettah Street, Colombo 13';
    var owner = params.get('owner') || 'Manisha Gurukanda';
    
    var gymName = document.querySelectorAll('.gym-name, #gym-name, [data-gym-name]');
    gymName.forEach(function(el) {
        el.textContent = name;
    });
    
    var gymPhone = document.querySelectorAll('.gym-phone, #gym-phone, [data-gym-phone]');
    gymPhone.forEach(function(el) {
        el.textContent = phone;
    });
    
    var phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(function(link) {
        link.href = 'tel:' + phone.replace(/\s/g, '');
    });
    
    var gymAddress = document.querySelectorAll('.gym-address, #gym-address, [data-gym-address]');
    gymAddress.forEach(function(el) {
        el.textContent = address;
    });
    
    var gymOwner = document.querySelectorAll('.gym-owner, #gym-owner, [data-gym-owner]');
    gymOwner.forEach(function(el) {
        el.textContent = owner;
    });
    
    document.title = name + ' - Professional Gym & Fitness Center';
    
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', name + ' - Your premier fitness destination in ' + address + '. Expert trainers, modern equipment, and personalized programs.');
    }
})();
