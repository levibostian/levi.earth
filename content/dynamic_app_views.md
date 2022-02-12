---
title: Dynamic app views
---

While freelancing, I had it happen *a lot* when a client would look at the app and say, "Can you change the text to say __ instead of __?". It was annoying because 99% of the time, those strings were hard-coded into the app. It would require me to open my development machine, create a new git branch, make my change, make sure it looks good, deploy the change, wait for Apple to approve it, etc. I got annoyed by this and worked to make a better way. 

My solution. Remote Config server JSON string + app Views setup to show all content from remote config. 

```kotlin
class MainFragment : Fragment() {

    @Inject lateinit var viewDataProvider: ViewDataProvider

    private val viewData: ViewData by lazy {
        viewDataProvider.mainFragment
    }

    // The pattern of ViewData is to have it exist in the View controller itself and not share the Vo with other parts of the app. Why? Because even if you imagine 1 view being shared across multiple screens of the app, the wording for that context might be different. To allow each screen to be very flexible and able to adapt, it's best to put it in the view itself
    @JsonClass(generateAdapter = true)
    data class ViewData(
        val loadingText: String
    )

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        frag_main_loading.title = viewData.loadingText
    }
}

class ViewDataProvider @Inject constructor(@ApplicationContext private val context: Context, private val remoteConfig: RemoteConfigAdapter) {
    val mainFragment: MainFragment.ViewData = remoteConfig.getValue("main_fragment_viewdata", MainFragment.ViewData::class.java, MainFragment.ViewData(context.getString(R.string.loading_repos)))
}
```