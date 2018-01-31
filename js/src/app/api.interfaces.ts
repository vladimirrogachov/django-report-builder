interface IContentType {
  pk: number;
  name: string;
}

export type ContentTypeResponse = IContentType[];

interface IBase {
  field: string;
  field_verbose: string;
  field_type: string;
  path: string;
  path_verbose: string;
}

export interface IDisplayField extends IBase {
  id?: number;
  name: string;
  sort?: any;
  sort_reverse?: boolean;
  width?: number;
  aggregate?: string;
  position: number;
  total?: boolean;
  group?: boolean;
  report?: number;
  display_format?: any;
  is_default?: boolean;
  can_filter?: boolean;
  field_choices?: any[];
  help_text?: string;
}

export interface IFilter extends IBase {
  exclude: boolean;
  filter_type: string;
  filter_value: any;
  filter_value2?: any;
  id?: number;
  position: number;
  report: number;
}

export interface IReportDetailed {
  id: number;
  name: string;
  description: string;
  modified: string;
  root_model: number;
  root_model_name: string;
  displayfield_set: IDisplayField[];
  distinct: boolean;
  user_created: number;
  user_modified: any;
  filterfield_set: IFilter[];
  report_file: any;
  report_file_creation: any;
  lastSaved?: string;
}

interface IUser {
  first_name: string;
  last_name: string;
  id: number;
}

export interface IReport {
  id: number;
  name: string;
  modified: string;
  root_model: number;
  root_model_name: string;
  user_created: IUser;
}

export interface IGetRelatedFieldRequest {
  model: number;
  path: string;
  path_verbose?: string;
  field: string;
}

export interface IRelatedField {
  field_name: string;
  verbose_name: string;
  path: string;
  help_text: string;
  model_id: number;
  parent_model_name: string;
  parent_model_app_label: boolean;
  included_model: boolean;
}

export interface INestedRelatedField extends IRelatedField {
  children: INestedRelatedField[];
}

export interface IField extends IBase {
  name: string;
  is_default: boolean;
  field_choices?: any;
  can_filter: boolean;
  help_text: string;
}

export type ReportsResponse = IReport[];

export interface IReportPreview {
  data: (string | number)[][];
  meta: {
    titles: string[];
  };
}

export interface IConfig {
  async_report: boolean;
}

export interface IAsyncTaskId {
  task_id: string;
}

export interface INewReport {
  name: string;
  description: string;
  root_model: number;
}

export interface ITaskStatus {
  state: string;
  link?: string;
  email?: boolean;
}
