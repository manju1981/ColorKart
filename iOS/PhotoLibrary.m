#import "RCTBridgeModule.h"


@interface RCT_EXTERN_MODULE(PhotoLibrary, NSObject)

RCT_EXTERN_METHOD(readFile:(NSString *)fileName errorCallback:(RCTResponseSenderBlock *)failureCallback callback:(RCTResponseSenderBlock *)successCallback)

RCT_EXTERN_METHOD(readPhoto:(RCTResponseSenderBlock *)successCallback  errorCallback:(RCTResponseSenderBlock *)failureCallback)

@end