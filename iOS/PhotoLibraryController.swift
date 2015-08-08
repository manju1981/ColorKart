//
//  PhotoLibraryController.swift
//  HelloWorld
//
//  Created by manjurn on 31/07/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

import UIKit
import Foundation

@objc(PhotoLibrary)

class PhotoLibraryController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

  var jscallback: RCTResponseSenderBlock!
  
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    

   @objc func readFile(fileName: String?, errorCallback failureCallback: RCTResponseSenderBlock, callback successCallback: RCTResponseSenderBlock) -> Void  {
      NSLog("Hi Manju")
    }
  
  @objc func readPhoto(successCallback: RCTResponseSenderBlock, errorCallback failureCallback: RCTResponseSenderBlock) -> Void  {
    
    NSLog("Hi Photo")
    let imagePicker = UIImagePickerController()
    imagePicker.allowsEditing = false
    imagePicker.delegate = self
    imagePicker.sourceType = .PhotoLibrary
    self.jscallback = successCallback
    
    
    NSLog("b4 while")

     UIApplication.sharedApplication().keyWindow?.rootViewController?.presentViewController(imagePicker, animated: true, completion: nil)

  }
  
  func finishAndUpdate(imageURL: NSURL) {
    UIApplication.sharedApplication().keyWindow?.rootViewController?.dismissViewControllerAnimated(true, completion: nil)
    
    let resultsDict = [
      "imageUrl" : imageURL.absoluteString!
    ];
    self.jscallback([resultsDict]);
    
  }
  
  func imagePickerController(picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [NSObject : AnyObject]) {
    let imageURL = info[UIImagePickerControllerReferenceURL] as NSURL
    
     
    
    NSLog("dismissing")
    
    finishAndUpdate(imageURL)
    
   // dismissViewControllerAnimated(true, completion: nil)
  }
  
  func imagePickerControllerDidCancel(picker: UIImagePickerController) {
    UIApplication.sharedApplication().keyWindow?.rootViewController?.dismissViewControllerAnimated(true, completion: nil)
  }
  
}
