export interface LangTranslation {
  siteName: string;
  slogan: string;
  version: string;
  authLabel: string;
  components: {
    langPicker: {
      label: string;
    };
  };
  menus: {
    home: string;
  };
  forms: {
    login: {
      title: string;
      fields: {
        email: string;
        password: string;
      };
      placeholder: {
        email: string;
        password: string;
      };
      errors: {
        email_is_invalid: string;
        password_is_required: string;
      };
      submit_btn_label: string;
      forgot_password: string;
      footer: {
        no_account: string;
        register_link_label: string;
      };
    };
    register: {
      title: string;
      fields: {
        username: string;
        email: string;
        password: string;
        penName: string;
      };
      placeholder: {
        email: string;
        username: string;
        penName: string;
        password: string;
      };
      errors: {
        email_is_invalid: string;
        password_format_error: string;
      };
      submit_btn_label: string;
      footer: {
        has_account: string;
        login_link_label: string;
        I_Agree: string;
      };
    };
  };
  resources?: {
    users: {
      name: string;
      fields: {
        username: string;
        penName: string;
        email: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}
