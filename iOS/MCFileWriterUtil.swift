import Foundation

@objc(MCFileWriterUtil)
class MCFileWriterUtil: NSObject {
  
  @objc func writeFile(fileName: String?, withContents contents: String, errorCallback failureCallback: RCTResponseSenderBlock, callback successCallback: RCTResponseSenderBlock) -> Void {
    
    // Check if fileName is nil or empty
    if (fileName ?? "").isEmpty {
      // Craft a failure message
      let resultsDict = [
        "success": false,
        "errMsg": "Filename is empty"
      ]
      
      // Execute the JavaScript failure callback handler
      failureCallback([resultsDict])
      
      return; // Halt execution of this function
    }
    
    // Create an array of directory Paths, to allow us to get the documents directory
    let paths = NSSearchPathForDirectoriesInDomains(.DocumentDirectory, .UserDomainMask, true)
    
    // The documents directory is the first item - Swift complains here if we don't specify AnyObject as the type.
    let documentsDirectory: AnyObject = paths[0]
    
    // Create a string that prepends the documents directory path to a text file name
    let fileNameWithPath = "\(documentsDirectory)/\(fileName!)"
    NSLog("Writing to \(fileNameWithPath)")
    
    // Initialize an NSError variable
    var writeError: NSError?
    
    // Here we save contents to disk by executing the writeToFile method of
    // the contents String, which is the second argument to this function.
    contents.writeToFile(fileNameWithPath, atomically: false, encoding: NSUTF8StringEncoding, error: &writeError)
    
    // Error Condition handling
    if writeError != nil {
      // Craft a failure message
      let resultsDict = [
        "success" : false,
        "errMsg"  : writeError!.localizedDescription
      ];
      
      // Execute the JavaScript failure callback handler
      failureCallback([resultsDict]);
    }
      // Success handling
    else {
      
      // Craft a success return message
      let resultsDict = [
        "success" : true
      ];
      
      // Call the JavaScript sucess handler
      successCallback([resultsDict]);
    }
  }
  
  @objc func readFile(fileName: String?, errorCallback failureCallback: RCTResponseSenderBlock, callback successCallback: RCTResponseSenderBlock) -> Void {
    
    // Check if fileName is nil or empty
    if (fileName ?? "").isEmpty {
      // Craft a failure message
      let resultsDict = [
        "success": false,
        "errMsg": "Filename is empty"
      ]
      
      // Execute the JavaScript failure callback handler
      failureCallback([resultsDict])
      
      return; // Halt execution of this function
    }
    
    // Create an array of directory Paths, to allow us to get the documents directory
    let paths = NSSearchPathForDirectoriesInDomains(.DocumentDirectory, .UserDomainMask, true)
    
    // The documents directory is the first item
    let documentsDirectory: AnyObject = paths[0]
    
    // Create a string that prepends the documents directory path to a text file name
    let fileNameWithPath = "\(documentsDirectory)/\(fileName!)"
    
    // Initialize an optional NSError variable
    var readError: NSError?
    
    // Allocate a string and initialize it with the contents of the file via
    // the contentsOfFile convenience init.
    let fileContents = NSString(contentsOfFile: fileNameWithPath, encoding: NSUTF8StringEncoding, error: &readError)
    NSLog("Reading from \(fileNameWithPath)")
    
    // Error Condition handling
    if readError != nil {
      // Craft a failure message
      let resultsDict = [
        "success" : false,
        "errMsg"  : readError!.localizedDescription
      ];
      
      // Execute the JavaScript failure callback handler
      failureCallback([resultsDict]);
    }
      // Success handling
    else {
      // Craft a success return message
      let resultsDict = [
        "success"  : true,
        "contents" : fileContents!
      ];
      
      // Call the JavaScript sucess handler
      successCallback([resultsDict]);
    }
  }
}
