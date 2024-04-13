import {HTTP_STATUS_CODES} from './constants/httpStatusCodes';
import actionEnums from './constants/actionEnums';

const determineAction = (response, actions) => {
  if (
    !response ||
    !response.status ||
    response.status === HTTP_STATUS_CODES.SERVER_ERROR_SERVICE_UNAVAILABLE
  ) {
    return actions[actionEnums.FAILED]({});
  }
  let actionStrategyByHTTPCode = {
    [HTTP_STATUS_CODES.BAD_REQUEST]: actions[actionEnums.FAILED](response),
    [HTTP_STATUS_CODES.UNAUTHORIZED]: actions[actionEnums.FAILED](response),
    [HTTP_STATUS_CODES.NOT_FOUND]: actions[actionEnums.FAILED](response),
    [HTTP_STATUS_CODES.SERVER_ERROR]: actions[actionEnums.FAILED](response),
    [HTTP_STATUS_CODES.FORBIDDEN]: actions[actionEnums.FAILED](response),
    [HTTP_STATUS_CODES.TEAPOT]: actions[actionEnums.FAILED](response),
    [HTTP_STATUS_CODES.OK]:
      (response.body && !response.body?.exception) || response.body?.exception
        ? actions[actionEnums.SUCCESS](response)
        : actions[actionEnums.ERROR](response),
  };

  return actionStrategyByHTTPCode[response.status]
    ? actionStrategyByHTTPCode[response.status]
    : actions[actionEnums.FAILED](response);
};

export default determineAction;
