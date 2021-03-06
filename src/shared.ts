/*
 * @Author: liupei
 * @Date: 2019-09-26 14:36:12
 * @Last Modified by: liupei
 * @Last Modified time: 2019-10-14 17:22:54
 */

import * as vscode from 'vscode';

export const EXTENSION_SCHEME = 'gerrit';

export const NORMAL_NODE_EXECUTABLE = 'node';

// 登录信息
export interface Account {
    username: string | undefined;
    password: string | undefined;
}

// 用户状态
export enum UserStatus {
    SignedIn = 1,
    SignedOut = 2,
}

// 状态栏信息分类
export enum StatusInfoType {
    Status = 1,
    ChangeInfo = 2,
}

// 弹窗选项配置
export namespace DialogOptions {
    export const no: vscode.MessageItem = { title: 'No', isCloseAffordance: true };
    export const yes: vscode.MessageItem = { title: 'Yes' };
    export const open: vscode.MessageItem = { title: 'Open' };
    export const never: vscode.MessageItem = { title: 'Never' };
    export const singUp: vscode.MessageItem = { title: 'Sign uo' };
}

// 提示类型
export enum DialogType {
    INFO = 'info',
    ERROR = 'error',
    WARNING = 'warning',
}

// 用户详情
export interface UserDetail {
    name?: string;
    email: string;
    username: string;
    _account_id?: number;
    registered_on?: string;
    avatars?: [
        {
            url: string;
            height: number;
        }
    ];
}

// 得分标记
export interface ChangeLabels {
    ['Code-Review']: {
        ['value']?: number;
        ['rejected']?: any;
        ['approved']?: any;
        ['recommended']?: any;
    };
}

// 一次提交的描述
export interface Change {
    id: string;
    type: string;
    _number: number;
    project: string;
    branch: string;
    status: string;
    subject: string;
    change_id: string;
    updated: string;
    created: string;
    mergeable: boolean;
    submittable: boolean;
    insertions: number;
    deletions: number;
    hashtags: string[];
    revisions: string[];
    currentRevision: string;
    owner: UserDetail;
    labels: ChangeLabels;
}

// change 默认选项
export const DEFAULT_CHANGE = {
    id: '',
    type: '',
    _number: 0,
    project: '',
    branch: '',
    status: '',
    change_id: '',
    updated: '',
    created: '',
    mergeable: false,
    submittable: false,
    insertions: 0,
    deletions: 0,
    hashtags: [],
    revisions: [],
    currentRevision: '',
    labels: {
        'Code-Review': {}
    },
    owner: {
        email: 'Unknown',
        username: 'Unknown',
    },
};

// 一次提交的修订版本
export interface ChangeRevision {
    currentRevision: string;
    revisions: string[];
}

// 提交的修订版本
export interface RevisionDetail {
    ref: string;
    _number: number;
    created: string;
    uploader: UserDetail;
}

// 一次提交的文件列表和修订版本列表
export interface FilesAndRevisions {
    files: string[];
    revisions: ChangeRevision;
}

// 列表类别
export const CATEGORY = {
    OUTGOING_REVIEWS: 'OUTGOING REVIEWS',
    INCOMING_REVIEWS: 'INCOMING REVIEWS',
    RECENTLY_CLOSED: 'RECENTLY CLOSED',
};

// change 状态
export const CHANGE_STATUS = {
    '0': 0,
    '+1': 1,
    '+2': 2,
    '-1': -1,
    '-2': -2,
    NEW: 'NEW',
    MERGED: 'MERGED',
    ABANDONED: 'ABANDONED',
};

// webview 配置
export interface GerritWebviewOption {
    title: string;
    preserveFocus?: boolean;
    viewColumn: vscode.ViewColumn;
}

// 状态栏信息
export interface StatusBarInfo {
    type: number;
    name?: string;
    info?: string;
}

// 请求参数配置
export interface RequestConfig {
    data: any;
    headers?: {
        cookie?: string;
        ['X-Gerrit-Auth']?: string
    };
}

// http 响应
export interface HttpResponse {
    data: any;
    status: number;
    statusText: string;
    config: {
        url: string;
        method: string;
        headers: any;
        baseUrl: string;
    };
}


export const TEXT_KEY = {
    DIFF_A: 'diffA:',
    DIFF_B: 'diffB:',
};
export interface TextDocumentContent {
    content: string;
    expires: number;
}
