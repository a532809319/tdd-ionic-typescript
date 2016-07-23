///<reference path="../../typings/index.d.ts"/>

chai.should();

describe('tabs controller', () => {
    let ctrl

    it('should init', () => {
        tdd.setup('app.tabs', ['$controller'])
        ctrl = $controller('TabsCtrl')
        ctrl.should.exist
    })

    describe('text properties', () => {
        beforeEach(() => {
            tdd.setup('app.tabs', ['$controller'])
            ctrl = $controller('TabsCtrl')
        })

        it('should have more', () => {
            ctrl.more.should.equal('more')
        });
±
        it('should have items', () => {
            ctrl.items.should.equal('items')
        });

        it('should have share', () => {
            ctrl.share.should.equal('share')
        });
    })
})

describe('options controller', () => {
    let ctrl

    it('should init', () => {
        tdd.setup('app.options', ['$controller'])
        ctrl = $controller('OptionsCtrl')
        ctrl.should.exist
    })

    describe('text properties', () => {

        beforeEach(() => {
            tdd.setup('app.options', ['$controller'])
            ctrl = $controller('OptionsCtrl')
        })

        it('should have new message', () => {
            ctrl.new_update.should.equal('New Update!')
        });

        it('should have title', () => {
            ctrl.title.should.equal('More!')
        });

        it('should have feednack', () => {
            ctrl.feedback.should.equal('Feedback')
        });

        it('should have mi items', () => {
            ctrl.my_items.should.equal('My Items')
        });

        it('should have my shares', () => {
            ctrl.my_shares.should.equal('My Shares')
        });
    })

})

describe('search controller', () => {
    let ctrl

    beforeEach(() => {
        tdd.setup('app.search', ['$controller'])
        ctrl = $controller('SearchCtrl')
    })

    it('should init', () => {
        ctrl.should.exist
    })

    describe('text properties', () => {
        it('should have a title', () => {
            ctrl.title.should.equal('Search Item!')
        })

        it('should have a placeholder for search', () => {
            ctrl.placeholder_search.should.equal('Search Item!')
        })

        it('should have my item', () => {
            ctrl.my_items.should.equal('My Items')
        })

        it('should have types', () => {
            ctrl.kinds.should.equal('kinds: ')
        })
    })

    it('should have my-items switch `false` by default', () => {
        ctrl.switch_my_items.should.be.false
    })

    it('should have a list of items', () => {
        ctrl.items.length.should.be.above(0)
    })

    it('should have a list of 5', () => {
        ctrl.items.length.should.equal(6)
    })
})

describe('share controller', () => {
    let ctrl

    beforeEach(() => {
        tdd.setup('app.share', ['$controller'])
        ctrl = $controller('ShareCtrl')
    })

    it('should init', () => {
        ctrl.should.exist
    })

    describe('text properties', () => {
        it('should have info', () => {
            ctrl.info.should.equal('Info')
        })

        it('should have facebook btn', () => {
            ctrl.btn_facebook.should.equal(' facebook')
        })

        it('should have twitter btn', () => {
            ctrl.btn_twitter.should.equal(' twitter')
        })

        it('should have title', () => {
            ctrl.title.should.equal('Share It!')
        })
    })

    describe('css class for icons', () => {
        it('should have facebook', () => {
            ctrl.icon_facebook.should.equal('icon ion-social-facebook')
        })

        it('should have twitter', () => {
            ctrl.icon_twitter.should.equal('icon ion-social-twitter')
        })
    })

})

describe('add controller', () => {
    let ctrl

    beforeEach(() => {
        tdd.setup('app.add', ['$controller'])

        ctrl = $controller('AddCtrl')
    })

    it('should init', () => {
        ctrl.should.exist
    })

    describe('text properties', () => {
        it('should have empty search placeholder', () => {
            ctrl.search_item.should.equal('')
        })

        it('should have title', () => {
            ctrl.title.should.equal('Location')
        })

        it('should have data', () => {
            ctrl.data.should.equal('Location data')
        })

        it('should have placeholder for the search input', () => {
            ctrl.placeholder_search.should.equal('Search Item')
        })

        it('should have share', () => {
            ctrl.btn_share.should.equal(' Share')
        })
    })

    it('should have an icon property for the share button', () => {
        ctrl.icon_share.should.equal('icon ion-android-contacts')
    })
})

namespace tdd {
    export function setup(module: string, deps: string[]) {
        bard.appModule(module);
        bard.inject.apply(this, deps)
    }
}
