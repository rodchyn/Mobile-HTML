Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        var tabpanel = new Ext.TabPanel({
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            fullscreen: true,
            autoScroll: true,
            ui: 'light',
            cardSwitchAnimation: {
                type: 'slide',
                cover: true
            },
            
            defaults: {
                scroll: 'vertical'
            },
            items: [{
                title: 'About',
                html: '<h1>Lape Mobile</h1><p>From this app you can check your tasks. Make some little changes, or talk with coworkers.</p>',
                iconCls: 'info',
                cls: 'card1'
            }, /*{
                title: 'Favorites',
                html: '<h1>Favorites Card</h1>',
                iconCls: 'favorites',
                cls: 'card2',
                badgeText: '4'
            }, {
                title: 'Downloads',
                id: 'tab3',
                html: '<h1>Downloads Card</h1>',
                //badgeText: 'Text can go here too, but it will be cut off if it is too long.',
                cls: 'card3',
                iconCls: 'download'
            }, */{
                    xtype: 'fieldset',
                    title: 'Personal Info',
                    instructions: 'Please enter the information above.',
                    items: [{
                        xtype: 'emailfield',
                        name : 'email',
                        label: 'Email',
                        placeHolder: 'you@sencha.com',
                        useClearIcon: true
                    }, {
                        xtype: 'passwordfield',
                        name : 'password',
                        label: 'Password',
                        useClearIcon: false
                    }, {
                        xtype: 'checkboxfield',
                        name : 'save_password',
                        label: 'Save password',
                        value: true
                    }],
	            title: 'Settings',
                    cls: 'card4',
                    iconCls: 'settings'
            }, /*{
                title: 'User',
                html: '<h1>User Card</h1>',
                cls: 'card5',
                iconCls: 'user'
            }*/]
        });
    }
});