#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MCFileWriterUtil, NSObject)

RCT_EXTERN_METHOD(writeFile:(NSString *)fileName withContents:(NSString *)contents errorCallback:(RCTResponseSenderBlock *)failureCallback callback:(RCTResponseSenderBlock *)successCallback)

RCT_EXTERN_METHOD(readFile:(NSString *)fileName errorCallback:(RCTResponseSenderBlock *)failureCallback callback:(RCTResponseSenderBlock *)successCallback)

@end