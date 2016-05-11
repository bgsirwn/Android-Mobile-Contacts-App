<!--
 // Cole Howell, Manoj Bompada
 // ITCS 4180
 // index.html
 -->


// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
}

function getPhoto(){
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY });
            }

        
        function onPhotoDataSuccess (imageData) {
            // body...         
            
            var buttonGalleryInfo = document.getElementById('buttonGalleryInfo');
            buttonGallery.value = imageData;    
        }

        function onFail(message){
            alert('Failed because: ' +message);
        }

function onDeviceReady(){
        
        var fullName = document.getElementById('name').value;
        var mobile = document.getElementById('mobile').value;
        var home = document.getElementById('home').value;
        var work = document.getElementById('work').value;
        var email = document.getElementById('email').value;
        var url = document.getElementById('url').value;
        var dateOfBirth = document.getElementById('birthDate').value;
        
        // create a new contact object
        var myContact = navigator.contacts.create({"displayName": fullName});
        var name = new ContactName();
        name.givenName = fullName;
        name.familyName = fullName;
        myContact.name = fullName;
        
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', work, false);
        phoneNumbers[1] = new ContactField('mobile', mobile, true); // preferred number
        phoneNumbers[2] = new ContactField('home', home, false);
        myContact.phoneNumbers = phoneNumbers;
        
        var emails = []
        emails[0] = new ContactField('email', email, true);
        myContact.emails = emails;
        
        var urls = [];
        urls[0] = new ContactField('url', url)
        myContact.urls = urls;
        
        myContact.save(onSuccessCallBack, onErrorCallBack);
      }
    
function onSuccessCallBack(contact) {
      alert("Save Success");
    }
    
    // onErrorCallBack: Failed to get the contacts
    //
function onErrorCallBack(contactError) {
      alert("Error = " + contactError.code);
    }

