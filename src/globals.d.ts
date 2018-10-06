declare module "redux-axios-middleware";

interface $LTI {
  /**
   * The LTI ID
   *
   * @type {string}
   * @memberof $LTI
   */
  id: string;
  /**
   * User ID of the learner is currently interacting with the LTI
   *
   * Note: This is always set to "student" when the LTI is viwed in edit view
   * of the edX platform.
   *
   * @type {string}
   * @memberof $LTI
   */
  userID: string;
  /**
   * This can either be Instructor | Administrator | Student
   *
   *
   * @type {string}
   * @memberof $LTI
   */
  user_role: string;
}

declare var $LTI: $LTI;
