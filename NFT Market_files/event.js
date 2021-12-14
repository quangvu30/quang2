// mobile handle
(function() {
    const btnTriggerDropdown = document.getElementById('trigger-dropdown-mobile');
    const dropdown = document.getElementById('dropdown-mobile');

    const propertiesArrow = document.getElementById('properties-arrow-mobile');
    const propertiesContent = document.getElementById('properties-content-mobile');
    
    const detailArrowMobile = document.getElementById('detail-arrow-mobile');
    const detailContentMobile = document.getElementById('detail-content-mobile');

    (function dropdownHandler() {
        let open = false;
        const openClassNames = 'ant-dropdown ant-dropdown-placement-bottomRight ';
        const closeClassNames = 'ant-dropdown ant-dropdown-placement-bottomRight  ant-dropdown-hidden';
        btnTriggerDropdown.addEventListener('click', () => {
            dropdown.classList = open ? closeClassNames : openClassNames;
            open = !open;
        })
    })();

    (function propertiesHandler() {
        let open = false;
        const openClasses = 'item-content___1rMxa property-content___4v3vk expand___1oT8e';
        const closeClasses = 'item-content___1rMxa property-content___4v3vk collapse___BiGs0';
        const styleOpen = 'transform: rotate(-180deg);';
        propertiesArrow.addEventListener('click', () => {
            propertiesArrow.style = open ? '' : styleOpen;
            propertiesContent.classList = open ? closeClasses : openClasses;
            open = !open;
        })
    })();
    
    (function detailHandler() {
        let open = false;
        const openClasses = 'item-content___1rMxa expand___1oT8e';
        const closeClasses = 'item-content___1rMxa collapse___BiGs0';
        const styleOpen = 'transform: rotate(-180deg);';
        detailArrowMobile.addEventListener('click', () => {
            detailArrowMobile.style = open ? '' : styleOpen;
            detailContentMobile.classList = open ? closeClasses : openClasses;
            open = !open;
        })
    })();
})()