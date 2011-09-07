Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        var tabpanel = new Ext.TabPanel({
            id: 'tp',
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
                html: '<h1>Lape <span class="green">Mobile</spam></h1><p>From this app you can check your tasks. Make some little changes, or talk with coworkers.</p>',
                iconCls: 'info',
                cls: 'card1'
            }, {
              title: 'Todos',
              iconCls: 'time',
              cls:     'card2',
              html:    '<h1>Todos</h1>'
            }, {
              id: 'chat',
              title: 'Chat',
              iconCls: 'team',
              cls:     'card3',
              html:    '<h1>Team chat</h1>'
            },/*{
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

	            title: 'Settings',
                    cls: 'card4',
                    html: '<h2>Settings</h2>',
                    iconCls: 'settings'
            }/*, {
                title: 'User',
                html: '<h1>User Card</h1>',
                cls: 'card5',
                iconCls: 'user'
            }*/]
        });

      setTimeout(function(){tabpanel.tabBar.getComponent(2).setBadge('2');}, 3000);
    }
  
  
});