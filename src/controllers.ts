///<reference path="../typings/index.d.ts"/>

namespace app.share {
    angular
        .module('app.share', ['app.core'])
}
namespace app.share {

    class Controller {
       btn_facebook = ' facebook'
       btn_twitter = ' twitter'
       icon_facebook = 'icon ion-social-facebook'
       icon_twitter = 'icon ion-social-twitter'
       info = 'Info' 
       title = 'Share It!'
    }

    angular
        .module('app.share')
        .controller('ShareCtrl', Controller)
}

namespace app.search {
    angular
        .module('app.search', ['app.core'])
}
namespace app.search {
    class Controller {
        placeholder_search = 'Search Item!'
        my_items = 'My Items'
        kinds = 'kinds: '
        title = 'Search Item!'
        items = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6']
        switch_my_items = false
    }

    angular
        .module('app.search')
        .controller('SearchCtrl', Controller)
}

namespace app.options {
    angular
        .module('app.options', ['app.core'])
}
namespace app.options {
    class Controller {
        feedback = 'Feedback'
        my_items = 'My Items'
        my_shares = 'My Shares'
        title = 'More!'
        new_update = 'New Update!'
    }

    angular
        .module('app.options')
        .controller('OptionsCtrl', Controller)
}

namespace app.add {
    angular
        .module('app.add', ['app.core'])
}
namespace app.add {

    class Controller {
        search_item = ''
        title = 'Location'
        data = 'Location data'
        placeholder_search = 'Search Item'
        icon_share = 'icon ion-android-contacts'
        btn_share = ' Share'
    }

    angular
        .module('app.add')
        .controller('AddCtrl', Controller)
}

namespace app.tabs {
    angular
        .module('app.tabs', ['app.core'])
}

namespace app.tabs {
     class Controller {
         more = 'more'
         items = 'items'
         share = 'share'
     }

     angular 
        .module('app.tabs')
        .controller('TabsCtrl', Controller)
}