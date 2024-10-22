Yoast SEO
=========
Requires at least: 6.4
Tested up to: 6.6
Requires PHP: 7.2.5

Changelog
=========

## 23.8

Release date: 2024-11-05

#### Enhancements

* Adds a notification to inform the user when an error occurs while changing the visibility of a notification or a problem.

#### Bugfixes

* Fixes a bug in our Elementor integration where previously saved slug values of drafts would be ignored.


## 23.7

Release date: 2024-10-22

Yoast SEO 23.7 brings more enhancements and bugfixes. [Find more information about our software releases and updates here](https://yoa.st/release-22-10-24).

#### Enhancements

* Removes the _keyphrase in slug_ assessment for static home pages.

#### Bugfixes

* Fixes a bug where a database error would occur when there were no public taxonomies available for indexing.
* Fixes a bug where another plugin running the `exit()` function inside the `plugin_loaded` hook would result in a fatal error. Props to [menno-ll](https://github.com/menno-ll).

#### Other

* Removes translation strings that are not meant for the Yoast SEO Free version from the plugin.
* Resets the notice for search engines discouraged when changing Search engine visibility to visible.

### Earlier versions
For the changelog of earlier versions, please refer to [the changelog on yoast.com](https://yoa.st/yoast-seo-changelog).
