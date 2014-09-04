package com.example.jeff.webviewapplication;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebView;

public class MyWebViewActivity extends Activity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    WebView webView = new WebView(this);
    setContentView(webView);
    webView.getSettings().setJavaScriptEnabled(true);
    webView.loadUrl("file:///android_asset/index.html");
  }
}
