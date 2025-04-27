declare namespace ArgoCD {
    export interface AccountAccount {
        capabilities?: string[];
        enabled?: boolean;
        name?: string;
        tokens?: AccountToken[];
    }
    export interface AccountAccountsList {
        items?: AccountAccount[];
    }
    export interface AccountCanIResponse {
        value?: string;
    }
    export interface AccountCreateTokenRequest {
        /**
         * expiresIn represents a duration in seconds
         */
        expiresIn?: number; // int64
        id?: string;
        name?: string;
    }
    export interface AccountCreateTokenResponse {
        token?: string;
    }
    export interface AccountEmptyResponse {
    }
    export interface AccountToken {
        expiresAt?: number; // int64
        id?: string;
        issuedAt?: number; // int64
    }
    export interface AccountUpdatePasswordRequest {
        currentPassword?: string;
        name?: string;
        newPassword?: string;
    }
    export interface AccountUpdatePasswordResponse {
    }
    export interface ApplicationApplicationManifestQueryWithFiles {
        appNamespace?: string;
        checksum?: string;
        name?: string;
        project?: string;
    }
    export interface ApplicationApplicationManifestQueryWithFilesWrapper {
        chunk?: ApplicationFileChunk;
        query?: ApplicationApplicationManifestQueryWithFiles;
    }
    /**
     * ApplicationPatchRequest is a request to patch an application
     */
    export interface ApplicationApplicationPatchRequest {
        appNamespace?: string;
        name?: string;
        patch?: string;
        patchType?: string;
        project?: string;
    }
    export interface ApplicationApplicationResourceResponse {
        manifest?: string;
    }
    export interface ApplicationApplicationResponse {
    }
    export interface ApplicationApplicationRollbackRequest {
        appNamespace?: string;
        dryRun?: boolean;
        id?: number; // int64
        name?: string;
        project?: string;
        prune?: boolean;
    }
    /**
     * ApplicationSyncRequest is a request to apply the config state to live state
     */
    export interface ApplicationApplicationSyncRequest {
        appNamespace?: string;
        dryRun?: boolean;
        infos?: V1alpha1Info[];
        manifests?: string[];
        name?: string;
        project?: string;
        prune?: boolean;
        resources?: /* SyncOperationResource contains resources to sync. */ V1alpha1SyncOperationResource[];
        retryStrategy?: /* RetryStrategy contains information about the strategy to apply when a sync failed */ V1alpha1RetryStrategy;
        revision?: string;
        revisions?: string[];
        sourcePositions?: string /* int64 */[];
        strategy?: /* SyncStrategy controls the manner in which a sync is performed */ V1alpha1SyncStrategy;
        syncOptions?: ApplicationSyncOptions;
    }
    export interface ApplicationApplicationSyncWindow {
        duration?: string;
        kind?: string;
        manualSync?: boolean;
        schedule?: string;
    }
    export interface ApplicationApplicationSyncWindowsResponse {
        activeWindows?: ApplicationApplicationSyncWindow[];
        assignedWindows?: ApplicationApplicationSyncWindow[];
        canSync?: boolean;
    }
    export interface ApplicationFileChunk {
        chunk?: string; // byte
    }
    export interface ApplicationLinkInfo {
        description?: string;
        iconClass?: string;
        title?: string;
        url?: string;
    }
    export interface ApplicationLinksResponse {
        items?: ApplicationLinkInfo[];
    }
    export interface ApplicationLogEntry {
        content?: string;
        last?: boolean;
        podName?: string;
        timeStamp?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        timeStampStr?: string;
    }
    export interface ApplicationManagedResourcesResponse {
        items?: /**
         * ResourceDiff holds the diff of a live and target resource object
         * TODO: describe members of this type
         */
        V1alpha1ResourceDiff[];
    }
    export interface ApplicationOperationTerminateResponse {
    }
    export interface ApplicationResourceActionsListResponse {
        actions?: /**
         * TODO: describe this type
         * TODO: describe members of this type
         */
        V1alpha1ResourceAction[];
    }
    export interface ApplicationSyncOptions {
        items?: string[];
    }
    /**
     * ApplicationSetGetQuery is a query for applicationset resources
     */
    export interface ApplicationsetApplicationSetGenerateRequest {
        applicationSet?: /**
         * ApplicationSet is a set of Application resources
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=applicationsets,shortName=appset;appsets
         * +kubebuilder:subresource:status
         */
        V1alpha1ApplicationSet;
    }
    /**
     * ApplicationSetGenerateResponse is a response for applicationset generate request
     */
    export interface ApplicationsetApplicationSetGenerateResponse {
        applications?: /**
         * Application is a definition of Application resource.
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=applications,shortName=app;apps
         * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
         * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
         * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
         * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
         */
        V1alpha1Application[];
    }
    export interface ApplicationsetApplicationSetResponse {
        applicationset?: /**
         * ApplicationSet is a set of Application resources
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=applicationsets,shortName=appset;appsets
         * +kubebuilder:subresource:status
         */
        V1alpha1ApplicationSet;
        project?: string;
    }
    /**
     * EnvEntry represents an entry in the application's environment
     */
    export interface Applicationv1alpha1EnvEntry {
        /**
         * Name is the name of the variable, usually expressed in uppercase
         */
        name?: string;
        /**
         * Value is the value of the variable
         */
        value?: string;
    }
    /**
     * ResourceStatus holds the current sync and health status of a resource
     * TODO: describe members of this type
     */
    export interface Applicationv1alpha1ResourceStatus {
        group?: string;
        health?: /* HealthStatus contains information about the currently observed health state of an application or resource */ V1alpha1HealthStatus;
        hook?: boolean;
        kind?: string;
        name?: string;
        namespace?: string;
        requiresDeletionConfirmation?: boolean;
        requiresPruning?: boolean;
        status?: string;
        syncWave?: number; // int64
        version?: string;
    }
    /**
     * ClusterID holds a cluster server URL or cluster name
     */
    export interface ClusterClusterID {
        /**
         * type is the type of the specified cluster identifier ( "server" - default, "name" )
         */
        type?: string;
        /**
         * value holds the cluster server URL or cluster name
         */
        value?: string;
    }
    export interface ClusterClusterResponse {
    }
    export interface ClusterConnector {
        name?: string;
        type?: string;
    }
    export interface ClusterDexConfig {
        connectors?: ClusterConnector[];
    }
    export interface ClusterGoogleAnalyticsConfig {
        anonymizeUsers?: boolean;
        trackingID?: string;
    }
    /**
     * Help settings
     */
    export interface ClusterHelp {
        /**
         * the URLs for downloading argocd binaries
         */
        binaryUrls?: {
            [name: string]: string;
        };
        /**
         * the text for getting chat help, defaults to "Chat now!"
         */
        chatText?: string;
        /**
         * the URL for getting chat help, this will typically be your Slack channel for support
         */
        chatUrl?: string;
    }
    export interface ClusterOIDCConfig {
        cliClientID?: string;
        clientID?: string;
        enablePKCEAuthentication?: boolean;
        idTokenClaims?: {
            [name: string]: OidcClaim;
        };
        issuer?: string;
        name?: string;
        scopes?: string[];
    }
    /**
     * Plugin settings
     */
    export interface ClusterPlugin {
        /**
         * the name of the plugin, e.g. "kasane"
         */
        name?: string;
    }
    export interface ClusterSettings {
        additionalUrls?: string[];
        appLabelKey?: string;
        appsInAnyNamespaceEnabled?: boolean;
        /**
         * Deprecated: use sidecar plugins instead.
         */
        configManagementPlugins?: /* ConfigManagementPlugin contains config management plugin configuration */ V1alpha1ConfigManagementPlugin[];
        controllerNamespace?: string;
        dexConfig?: ClusterDexConfig;
        execEnabled?: boolean;
        googleAnalytics?: ClusterGoogleAnalyticsConfig;
        help?: /* Help settings */ ClusterHelp;
        hydratorEnabled?: boolean;
        impersonationEnabled?: boolean;
        installationID?: string;
        kustomizeOptions?: /* KustomizeOptions are options for kustomize to use when building manifests */ V1alpha1KustomizeOptions;
        kustomizeVersions?: string[];
        oidcConfig?: ClusterOIDCConfig;
        passwordPattern?: string;
        plugins?: /* Plugin settings */ ClusterPlugin[];
        resourceOverrides?: {
            [name: string]: /**
             * ResourceOverride holds configuration to customize resource diffing and health assessment
             * TODO: describe the members of this type
             */
            V1alpha1ResourceOverride;
        };
        statusBadgeEnabled?: boolean;
        statusBadgeRootUrl?: string;
        trackingMethod?: string;
        uiBannerContent?: string;
        uiBannerPermanent?: boolean;
        uiBannerPosition?: string;
        uiBannerURL?: string;
        uiCssURL?: string;
        url?: string;
        userLoginsDisabled?: boolean;
    }
    export interface ClusterSettingsPluginsResponse {
        plugins?: /* Plugin settings */ ClusterPlugin[];
    }
    /**
     * Response to a public key creation request
     */
    export interface GpgkeyGnuPGPublicKeyCreateResponse {
        created?: /* GnuPGPublicKeyList is a collection of GnuPGPublicKey objects */ V1alpha1GnuPGPublicKeyList;
        /**
         * List of key IDs that haven been skipped because they already exist on the server
         */
        skipped?: string[];
    }
    /**
     * Generic (empty) response for GPG public key CRUD requests
     */
    export interface GpgkeyGnuPGPublicKeyResponse {
    }
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in
     * JSON or YAML marshalling and unmarshalling, it produces or consumes the
     * inner type.  This allows you to have, for example, a JSON field that can
     * accept a name or number.
     * TODO: Rename to Int32OrString
     * +protobuf=true
     * +protobuf.options.(gogoproto.goproto_stringer)=false
     * +k8s:openapi-gen=true
     */
    export interface IntstrIntOrString {
        intVal?: number; // int32
        strVal?: string;
        type?: number; // int64
    }
    export interface NotificationService {
        name?: string;
    }
    export interface NotificationServiceList {
        items?: NotificationService[];
    }
    export interface NotificationTemplate {
        name?: string;
    }
    export interface NotificationTemplateList {
        items?: NotificationTemplate[];
    }
    export interface NotificationTrigger {
        name?: string;
    }
    export interface NotificationTriggerList {
        items?: NotificationTrigger[];
    }
    export interface OidcClaim {
        essential?: boolean;
        value?: string;
        values?: string[];
    }
    export interface ProjectDetailedProjectsResponse {
        clusters?: /* Cluster is the definition of a cluster resource */ V1alpha1Cluster[];
        globalProjects?: /**
         * AppProject provides a logical grouping of applications, providing controls for:
         * * where the apps may deploy to (cluster whitelist)
         * * what may be deployed (repository whitelist, resource whitelist/blacklist)
         * * who can access these applications (roles, OIDC group claims bindings)
         * * and what they can do (RBAC policies)
         * * automation access to these roles (JWT tokens)
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
         */
        V1alpha1AppProject[];
        project?: /**
         * AppProject provides a logical grouping of applications, providing controls for:
         * * where the apps may deploy to (cluster whitelist)
         * * what may be deployed (repository whitelist, resource whitelist/blacklist)
         * * who can access these applications (roles, OIDC group claims bindings)
         * * and what they can do (RBAC policies)
         * * automation access to these roles (JWT tokens)
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
         */
        V1alpha1AppProject;
        repositories?: /* Repository is a repository holding application configurations */ V1alpha1Repository[];
    }
    export interface ProjectEmptyResponse {
    }
    export interface ProjectGlobalProjectsResponse {
        items?: /**
         * AppProject provides a logical grouping of applications, providing controls for:
         * * where the apps may deploy to (cluster whitelist)
         * * what may be deployed (repository whitelist, resource whitelist/blacklist)
         * * who can access these applications (roles, OIDC group claims bindings)
         * * and what they can do (RBAC policies)
         * * automation access to these roles (JWT tokens)
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
         */
        V1alpha1AppProject[];
    }
    /**
     * ProjectCreateRequest defines project creation parameters.
     */
    export interface ProjectProjectCreateRequest {
        project?: /**
         * AppProject provides a logical grouping of applications, providing controls for:
         * * where the apps may deploy to (cluster whitelist)
         * * what may be deployed (repository whitelist, resource whitelist/blacklist)
         * * who can access these applications (roles, OIDC group claims bindings)
         * * and what they can do (RBAC policies)
         * * automation access to these roles (JWT tokens)
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
         */
        V1alpha1AppProject;
        upsert?: boolean;
    }
    /**
     * ProjectTokenCreateRequest defines project token creation parameters.
     */
    export interface ProjectProjectTokenCreateRequest {
        description?: string;
        /**
         * expiresIn represents a duration in seconds
         */
        expiresIn?: number; // int64
        id?: string;
        project?: string;
        role?: string;
    }
    /**
     * ProjectTokenResponse wraps the created token or returns an empty string if deleted.
     */
    export interface ProjectProjectTokenResponse {
        token?: string;
    }
    export interface ProjectProjectUpdateRequest {
        project?: /**
         * AppProject provides a logical grouping of applications, providing controls for:
         * * where the apps may deploy to (cluster whitelist)
         * * what may be deployed (repository whitelist, resource whitelist/blacklist)
         * * who can access these applications (roles, OIDC group claims bindings)
         * * and what they can do (RBAC policies)
         * * automation access to these roles (JWT tokens)
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
         */
        V1alpha1AppProject;
    }
    export interface ProjectSyncWindowsResponse {
        windows?: /* SyncWindow contains the kind, time, duration and attributes that are used to assign the syncWindows to apps */ V1alpha1SyncWindow[];
    }
    export interface ProtobufAny {
        type_url?: string;
        value?: string; // byte
    }
    /**
     * RepoCredsResponse is a response to most repository credentials requests
     */
    export interface RepocredsRepoCredsResponse {
    }
    /**
     * AppInfo contains application type and app file path
     */
    export interface RepositoryAppInfo {
        path?: string;
        type?: string;
    }
    /**
     * DirectoryAppSpec contains directory
     */
    export interface RepositoryDirectoryAppSpec {
    }
    /**
     * HelmAppSpec contains helm app name  in source repo
     */
    export interface RepositoryHelmAppSpec {
        /**
         * helm file parameters
         */
        fileParameters?: /* HelmFileParameter is a file parameter that's passed to helm template during manifest generation */ V1alpha1HelmFileParameter[];
        name?: string;
        /**
         * the output of `helm inspect values`
         */
        parameters?: /* HelmParameter is a parameter that's passed to helm template during manifest generation */ V1alpha1HelmParameter[];
        valueFiles?: string[];
        /**
         * the contents of values.yaml
         */
        values?: string;
    }
    export interface RepositoryHelmChart {
        name?: string;
        versions?: string[];
    }
    export interface RepositoryHelmChartsResponse {
        items?: RepositoryHelmChart[];
    }
    /**
     * KustomizeAppSpec contains kustomize images
     */
    export interface RepositoryKustomizeAppSpec {
        /**
         * images is a list of available images.
         */
        images?: string[];
    }
    export interface RepositoryManifestResponse {
        /**
         * Commands is the list of commands used to hydrate the manifests
         */
        commands?: string[];
        manifests?: string[];
        namespace?: string;
        /**
         * resolved revision
         */
        revision?: string;
        server?: string;
        sourceType?: string;
        /**
         * Raw response of git verify-commit operation (always the empty string for Helm)
         */
        verifyResult?: string;
    }
    export interface RepositoryParameterAnnouncement {
        /**
         * array is the default value of the parameter if the parameter is an array.
         */
        array?: string[];
        /**
         * collectionType is the type of value this parameter holds - either a single value (a string) or a collection
         * (array or map). If collectionType is set, only the field with that type will be used. If collectionType is not
         * set, `string` is the default. If collectionType is set to an invalid value, a validation error is thrown.
         */
        collectionType?: string;
        /**
         * itemType determines the primitive data type represented by the parameter. Parameters are always encoded as
         * strings, but this field lets them be interpreted as other primitive types.
         */
        itemType?: string;
        /**
         * map is the default value of the parameter if the parameter is a map.
         */
        map?: {
            [name: string]: string;
        };
        /**
         * name is the name identifying a parameter.
         */
        name?: string;
        /**
         * required defines if this given parameter is mandatory.
         */
        required?: boolean;
        /**
         * string is the default value of the parameter if the parameter is a string.
         */
        string?: string;
        /**
         * title is a human-readable text of the parameter name.
         */
        title?: string;
        /**
         * tooltip is a human-readable description of the parameter.
         */
        tooltip?: string;
    }
    /**
     * PluginAppSpec contains details about a plugin-type Application
     */
    export interface RepositoryPluginAppSpec {
        parametersAnnouncement?: RepositoryParameterAnnouncement[];
    }
    export interface RepositoryRef {
        name?: string;
        target?: string;
    }
    /**
     * A subset of the repository's named refs
     */
    export interface RepositoryRefs {
        branches?: string[];
        refs?: RepositoryRef[];
        tags?: string[];
    }
    /**
     * RepoAppDetailsQuery contains query information for app details request
     */
    export interface RepositoryRepoAppDetailsQuery {
        appName?: string;
        appProject?: string;
        source?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource;
        /**
         * source index (for multi source apps)
         */
        sourceIndex?: number; // int32
        /**
         * versionId from historical data (for multi source apps)
         */
        versionId?: number; // int32
    }
    /**
     * RepoAppDetailsResponse application details
     */
    export interface RepositoryRepoAppDetailsResponse {
        directory?: /* DirectoryAppSpec contains directory */ RepositoryDirectoryAppSpec;
        helm?: /* HelmAppSpec contains helm app name  in source repo */ RepositoryHelmAppSpec;
        kustomize?: /* KustomizeAppSpec contains kustomize images */ RepositoryKustomizeAppSpec;
        plugin?: /* PluginAppSpec contains details about a plugin-type Application */ RepositoryPluginAppSpec;
        type?: string;
    }
    /**
     * RepoAppsResponse contains applications of specified repository
     */
    export interface RepositoryRepoAppsResponse {
        items?: /* AppInfo contains application type and app file path */ RepositoryAppInfo[];
    }
    export interface RepositoryRepoResponse {
    }
    export interface RuntimeError {
        code?: number; // int32
        details?: ProtobufAny[];
        error?: string;
        message?: string;
    }
    /**
     * RawExtension is used to hold extensions in external versions.
     *
     * To use this, make a field which has RawExtension as its type in your external, versioned
     * struct, and Object in your internal struct. You also need to register your
     * various plugin types.
     *
     * // Internal package:
     *
     * 	type MyAPIObject struct {
     * 		runtime.TypeMeta `json:",inline"`
     * 		MyPlugin runtime.Object `json:"myPlugin"`
     * 	}
     *
     * 	type PluginA struct {
     * 		AOption string `json:"aOption"`
     * 	}
     *
     * // External package:
     *
     * 	type MyAPIObject struct {
     * 		runtime.TypeMeta `json:",inline"`
     * 		MyPlugin runtime.RawExtension `json:"myPlugin"`
     * 	}
     *
     * 	type PluginA struct {
     * 		AOption string `json:"aOption"`
     * 	}
     *
     * // On the wire, the JSON will look something like this:
     *
     * 	{
     * 		"kind":"MyAPIObject",
     * 		"apiVersion":"v1",
     * 		"myPlugin": {
     * 			"kind":"PluginA",
     * 			"aOption":"foo",
     * 		},
     * 	}
     *
     * So what happens? Decode first uses json or yaml to unmarshal the serialized data into
     * your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked.
     * The next step is to copy (using pkg/conversion) into the internal struct. The runtime
     * package's DefaultScheme has conversion functions installed which will unpack the
     * JSON stored in RawExtension, turning it into the correct object type, and storing it
     * in the Object. (TODO: In the case where the object is of an unknown type, a
     * runtime.Unknown object will be created and stored.)
     *
     * +k8s:deepcopy-gen=true
     * +protobuf=true
     * +k8s:openapi-gen=true
     */
    export interface RuntimeRawExtension {
        /**
         * Raw is the underlying serialization of this object.
         *
         * TODO: Determine how to detect ContentType and ContentEncoding of 'Raw' data.
         */
        raw?: string; // byte
    }
    export interface RuntimeStreamError {
        details?: ProtobufAny[];
        grpc_code?: number; // int32
        http_code?: number; // int32
        http_status?: string;
        message?: string;
    }
    /**
     * The current user's userInfo info
     */
    export interface SessionGetUserInfoResponse {
        groups?: string[];
        iss?: string;
        loggedIn?: boolean;
        username?: string;
    }
    /**
     * SessionCreateRequest is for logging in.
     */
    export interface SessionSessionCreateRequest {
        password?: string;
        token?: string;
        username?: string;
    }
    /**
     * SessionResponse wraps the created token or returns an empty string if deleted.
     */
    export interface SessionSessionResponse {
        token?: string;
    }
    /**
     * Event is a report of an event somewhere in the cluster.  Events
     * have a limited retention time and triggers and messages may evolve
     * with time.  Event consumers should not rely on the timing of an event
     * with a given Reason reflecting a consistent underlying trigger, or the
     * continued existence of events with that Reason.  Events should be
     * treated as informative, best-effort, supplemental data.
     */
    export interface V1Event {
        /**
         * What action was taken/failed regarding to the Regarding object.
         * +optional
         */
        action?: string;
        /**
         * The number of times this event has occurred.
         * +optional
         */
        count?: number; // int32
        eventTime?: /**
         * MicroTime is version of Time with microsecond level precision.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1MicroTime;
        firstTimestamp?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        involvedObject?: /**
         * ObjectReference contains enough information to let you inspect or modify the referred object.
         * ---
         * New uses of this type are discouraged because of difficulty describing its usage when embedded in APIs.
         *  1. Ignored fields.  It includes many fields which are not generally honored.  For instance, ResourceVersion and FieldPath are both very rarely valid in actual usage.
         *  2. Invalid usage help.  It is impossible to add specific help for individual usage.  In most embedded usages, there are particular
         *     restrictions like, "must refer only to types A and B" or "UID not honored" or "name must be restricted".
         *     Those cannot be well described when embedded.
         *  3. Inconsistent validation.  Because the usages are different, the validation rules are different by usage, which makes it hard for users to predict what will happen.
         *  4. The fields are both imprecise and overly precise.  Kind is not a precise mapping to a URL. This can produce ambiguity
         *     during interpretation and require a REST mapping.  In most cases, the dependency is on the group,resource tuple
         *     and the version of the actual struct is irrelevant.
         *  5. We cannot easily change it.  Because this type is embedded in many locations, updates to this type
         *     will affect numerous schemas.  Don't make new APIs embed an underspecified API type they do not control.
         *
         * Instead of using this type, create a locally provided and used type that is well-focused on your reference.
         * For example, ServiceReferences for admission registration: https://github.com/kubernetes/api/blob/release-1.17/admissionregistration/v1/types.go#L533 .
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +structType=atomic
         */
        V1ObjectReference;
        lastTimestamp?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * A human-readable description of the status of this operation.
         * TODO: decide on maximum length.
         * +optional
         */
        message?: string;
        metadata?: /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects
         * users must create.
         */
        V1ObjectMeta;
        /**
         * This should be a short, machine understandable string that gives the reason
         * for the transition into the object's current status.
         * TODO: provide exact specification for format.
         * +optional
         */
        reason?: string;
        related?: /**
         * ObjectReference contains enough information to let you inspect or modify the referred object.
         * ---
         * New uses of this type are discouraged because of difficulty describing its usage when embedded in APIs.
         *  1. Ignored fields.  It includes many fields which are not generally honored.  For instance, ResourceVersion and FieldPath are both very rarely valid in actual usage.
         *  2. Invalid usage help.  It is impossible to add specific help for individual usage.  In most embedded usages, there are particular
         *     restrictions like, "must refer only to types A and B" or "UID not honored" or "name must be restricted".
         *     Those cannot be well described when embedded.
         *  3. Inconsistent validation.  Because the usages are different, the validation rules are different by usage, which makes it hard for users to predict what will happen.
         *  4. The fields are both imprecise and overly precise.  Kind is not a precise mapping to a URL. This can produce ambiguity
         *     during interpretation and require a REST mapping.  In most cases, the dependency is on the group,resource tuple
         *     and the version of the actual struct is irrelevant.
         *  5. We cannot easily change it.  Because this type is embedded in many locations, updates to this type
         *     will affect numerous schemas.  Don't make new APIs embed an underspecified API type they do not control.
         *
         * Instead of using this type, create a locally provided and used type that is well-focused on your reference.
         * For example, ServiceReferences for admission registration: https://github.com/kubernetes/api/blob/release-1.17/admissionregistration/v1/types.go#L533 .
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +structType=atomic
         */
        V1ObjectReference;
        /**
         * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
         * +optional
         */
        reportingComponent?: string;
        /**
         * ID of the controller instance, e.g. `kubelet-xyzf`.
         * +optional
         */
        reportingInstance?: string;
        series?: /**
         * EventSeries contain information on series of events, i.e. thing that was/is happening
         * continuously for some time.
         */
        V1EventSeries;
        source?: /* EventSource contains information for an event. */ V1EventSource;
        /**
         * Type of this event (Normal, Warning), new types could be added in the future
         * +optional
         */
        type?: string;
    }
    /**
     * EventList is a list of events.
     */
    export interface V1EventList {
        /**
         * List of events
         */
        items?: /**
         * Event is a report of an event somewhere in the cluster.  Events
         * have a limited retention time and triggers and messages may evolve
         * with time.  Event consumers should not rely on the timing of an event
         * with a given Reason reflecting a consistent underlying trigger, or the
         * continued existence of events with that Reason.  Events should be
         * treated as informative, best-effort, supplemental data.
         */
        V1Event[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
    }
    /**
     * EventSeries contain information on series of events, i.e. thing that was/is happening
     * continuously for some time.
     */
    export interface V1EventSeries {
        /**
         * Number of occurrences in this series up to the last heartbeat time
         */
        count?: number; // int32
        lastObservedTime?: /**
         * MicroTime is version of Time with microsecond level precision.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1MicroTime;
    }
    /**
     * EventSource contains information for an event.
     */
    export interface V1EventSource {
        /**
         * Component from which the event is generated.
         * +optional
         */
        component?: string;
        /**
         * Node name on which the event is generated.
         * +optional
         */
        host?: string;
    }
    /**
     * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
     *
     * Each key is either a '.' representing the field itself, and will always map to an empty set,
     * or a string representing a sub-field or item. The string will follow one of these four formats:
     * 'f:<name>', where <name> is the name of a field in a struct, or key in a map
     * 'v:<value>', where <value> is the exact json formatted value of a list item
     * 'i:<index>', where <index> is position of a item in a list
     * 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values
     * If a key maps to an empty Fields value, the field that key represents is part of the set.
     *
     * The exact format is defined in sigs.k8s.io/structured-merge-diff
     * +protobuf.options.(gogoproto.goproto_stringer)=false
     */
    export interface V1FieldsV1 {
        /**
         * Raw is the underlying serialization of this object.
         */
        Raw?: string; // byte
    }
    /**
     * GroupKind specifies a Group and a Kind, but does not force a version.  This is useful for identifying
     * concepts during lookup stages without having partially valid types
     * +protobuf.options.(gogoproto.goproto_stringer)=false
     */
    export interface V1GroupKind {
        group?: string;
        kind?: string;
    }
    /**
     * JSON represents any valid JSON value.
     * These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
     */
    export interface V1JSON {
        raw?: string; // byte
    }
    /**
     * A label selector is a label query over a set of resources. The result of matchLabels and
     * matchExpressions are ANDed. An empty label selector matches all objects. A null
     * label selector matches no objects.
     * +structType=atomic
     */
    export interface V1LabelSelector {
        /**
         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
         * +optional
         * +listType=atomic
         */
        matchExpressions?: /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        V1LabelSelectorRequirement[];
        /**
         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
         * map is equivalent to an element of matchExpressions, whose key field is "key", the
         * operator is "In", and the values array contains only "value". The requirements are ANDed.
         * +optional
         */
        matchLabels?: {
            [name: string]: string;
        };
    }
    /**
     * A label selector requirement is a selector that contains values, a key, and an operator that
     * relates the key and values.
     */
    export interface V1LabelSelectorRequirement {
        /**
         * key is the label key that the selector applies to.
         */
        key?: string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        operator?: string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         * +optional
         * +listType=atomic
         */
        values?: string[];
    }
    /**
     * ListMeta describes metadata that synthetic resources must have, including lists and
     * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
     */
    export interface V1ListMeta {
        /**
         * continue may be set if the user set a limit on the number of items returned, and indicates that
         * the server has more data available. The value is opaque and may be used to issue another request
         * to the endpoint that served this list to retrieve the next set of available objects. Continuing a
         * consistent list may not be possible if the server configuration has changed or more than a few
         * minutes have passed. The resourceVersion field returned when using this continue value will be
         * identical to the value in the first response, unless you have received this token from an error
         * message.
         */
        continue?: string;
        /**
         * remainingItemCount is the number of subsequent items in the list which are not included in this
         * list response. If the list request contained label or field selectors, then the number of
         * remaining items is unknown and the field will be left unset and omitted during serialization.
         * If the list is complete (either because it is not chunking or because this is the last chunk),
         * then there are no more remaining items and this field will be left unset and omitted during
         * serialization.
         * Servers older than v1.15 do not set this field.
         * The intended use of the remainingItemCount is *estimating* the size of a collection. Clients
         * should not rely on the remainingItemCount to be set or to be exact.
         * +optional
         */
        remainingItemCount?: number; // int64
        /**
         * String that identifies the server's internal version of this object that
         * can be used by clients to determine when objects have changed.
         * Value must be treated as opaque by clients and passed unmodified back to the server.
         * Populated by the system.
         * Read-only.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
         * +optional
         */
        resourceVersion?: string;
        /**
         * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
         * +optional
         */
        selfLink?: string;
    }
    /**
     * LoadBalancerIngress represents the status of a load-balancer ingress point:
     * traffic intended for the service should be sent to an ingress point.
     */
    export interface V1LoadBalancerIngress {
        /**
         * Hostname is set for load-balancer ingress points that are DNS based
         * (typically AWS load-balancers)
         * +optional
         */
        hostname?: string;
        /**
         * IP is set for load-balancer ingress points that are IP based
         * (typically GCE or OpenStack load-balancers)
         * +optional
         */
        ip?: string;
        /**
         * IPMode specifies how the load-balancer IP behaves, and may only be specified when the ip field is specified.
         * Setting this to "VIP" indicates that traffic is delivered to the node with
         * the destination set to the load-balancer's IP and port.
         * Setting this to "Proxy" indicates that traffic is delivered to the node or pod with
         * the destination set to the node's IP and node port or the pod's IP and port.
         * Service implementations may use this information to adjust traffic routing.
         * +optional
         */
        ipMode?: string;
        /**
         * Ports is a list of records of service ports
         * If used, every port defined in the service should have an entry in it
         * +listType=atomic
         * +optional
         */
        ports?: V1PortStatus[];
    }
    /**
     * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource
     * that the fieldset applies to.
     */
    export interface V1ManagedFieldsEntry {
        /**
         * APIVersion defines the version of this resource that this field set
         * applies to. The format is "group/version" just like the top-level
         * APIVersion field. It is necessary to track the version of a field
         * set because it cannot be automatically converted.
         */
        apiVersion?: string;
        /**
         * FieldsType is the discriminator for the different fields format and version.
         * There is currently only one possible value: "FieldsV1"
         */
        fieldsType?: string;
        fieldsV1?: /**
         * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
         *
         * Each key is either a '.' representing the field itself, and will always map to an empty set,
         * or a string representing a sub-field or item. The string will follow one of these four formats:
         * 'f:<name>', where <name> is the name of a field in a struct, or key in a map
         * 'v:<value>', where <value> is the exact json formatted value of a list item
         * 'i:<index>', where <index> is position of a item in a list
         * 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values
         * If a key maps to an empty Fields value, the field that key represents is part of the set.
         *
         * The exact format is defined in sigs.k8s.io/structured-merge-diff
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1FieldsV1;
        /**
         * Manager is an identifier of the workflow managing these fields.
         */
        manager?: string;
        /**
         * Operation is the type of operation which lead to this ManagedFieldsEntry being created.
         * The only valid values for this field are 'Apply' and 'Update'.
         */
        operation?: string;
        /**
         * Subresource is the name of the subresource used to update that object, or
         * empty string if the object was updated through the main resource. The
         * value of this field is used to distinguish between managers, even if they
         * share the same name. For example, a status update will be distinct from a
         * regular update using the same manager name.
         * Note that the APIVersion field is not related to the Subresource field and
         * it always corresponds to the version of the main resource.
         */
        subresource?: string;
        time?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
    }
    /**
     * MicroTime is version of Time with microsecond level precision.
     *
     * +protobuf.options.marshal=false
     * +protobuf.as=Timestamp
     * +protobuf.options.(gogoproto.goproto_stringer)=false
     */
    export interface V1MicroTime {
        /**
         * Non-negative fractions of a second at nanosecond resolution. Negative
         * second values with fractions must still have non-negative nanos values
         * that count forward in time. Must be from 0 to 999,999,999
         * inclusive. This field may be limited in precision depending on context.
         */
        nanos?: number; // int32
        /**
         * Represents seconds of UTC time since Unix epoch
         * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
         * 9999-12-31T23:59:59Z inclusive.
         */
        seconds?: number; // int64
    }
    /**
     * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
     */
    export interface V1NodeSystemInfo {
        /**
         * The Architecture reported by the node
         */
        architecture?: string;
        /**
         * Boot ID reported by the node.
         */
        bootID?: string;
        /**
         * ContainerRuntime Version reported by the node through runtime remote API (e.g. containerd://1.4.2).
         */
        containerRuntimeVersion?: string;
        /**
         * Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64).
         */
        kernelVersion?: string;
        /**
         * Deprecated: KubeProxy Version reported by the node.
         */
        kubeProxyVersion?: string;
        /**
         * Kubelet Version reported by the node.
         */
        kubeletVersion?: string;
        /**
         * MachineID reported by the node. For unique machine identification
         * in the cluster this field is preferred. Learn more from man(5)
         * machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
         */
        machineID?: string;
        /**
         * The Operating System reported by the node
         */
        operatingSystem?: string;
        /**
         * OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
         */
        osImage?: string;
        /**
         * SystemUUID reported by the node. For unique machine identification
         * MachineID is preferred. This field is specific to Red Hat hosts
         * https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/rhsm/uuid
         */
        systemUUID?: string;
    }
    /**
     * ObjectMeta is metadata that all persisted resources must have, which includes all objects
     * users must create.
     */
    export interface V1ObjectMeta {
        /**
         * Annotations is an unstructured key value map stored with a resource that may be
         * set by external tools to store and retrieve arbitrary metadata. They are not
         * queryable and should be preserved when modifying objects.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
         * +optional
         */
        annotations?: {
            [name: string]: string;
        };
        creationTimestamp?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Number of seconds allowed for this object to gracefully terminate before
         * it will be removed from the system. Only set when deletionTimestamp is also set.
         * May only be shortened.
         * Read-only.
         * +optional
         */
        deletionGracePeriodSeconds?: number; // int64
        deletionTimestamp?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Must be empty before the object is deleted from the registry. Each entry
         * is an identifier for the responsible component that will remove the entry
         * from the list. If the deletionTimestamp of the object is non-nil, entries
         * in this list can only be removed.
         * Finalizers may be processed and removed in any order.  Order is NOT enforced
         * because it introduces significant risk of stuck finalizers.
         * finalizers is a shared field, any actor with permission can reorder it.
         * If the finalizer list is processed in order, then this can lead to a situation
         * in which the component responsible for the first finalizer in the list is
         * waiting for a signal (field value, external system, or other) produced by a
         * component responsible for a finalizer later in the list, resulting in a deadlock.
         * Without enforced ordering finalizers are free to order amongst themselves and
         * are not vulnerable to ordering changes in the list.
         * +optional
         * +patchStrategy=merge
         * +listType=set
         */
        finalizers?: string[];
        /**
         * GenerateName is an optional prefix, used by the server, to generate a unique
         * name ONLY IF the Name field has not been provided.
         * If this field is used, the name returned to the client will be different
         * than the name passed. This value will also be combined with a unique suffix.
         * The provided value has the same validation rules as the Name field,
         * and may be truncated by the length of the suffix required to make the value
         * unique on the server.
         *
         * If this field is specified and the generated name exists, the server will return a 409.
         *
         * Applied only if Name is not specified.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
         * +optional
         */
        generateName?: string;
        /**
         * A sequence number representing a specific generation of the desired state.
         * Populated by the system. Read-only.
         * +optional
         */
        generation?: number; // int64
        /**
         * Map of string keys and values that can be used to organize and categorize
         * (scope and select) objects. May match selectors of replication controllers
         * and services.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
         * +optional
         */
        labels?: {
            [name: string]: string;
        };
        /**
         * ManagedFields maps workflow-id and version to the set of fields
         * that are managed by that workflow. This is mostly for internal
         * housekeeping, and users typically shouldn't need to set or
         * understand this field. A workflow can be the user's name, a
         * controller's name, or the name of a specific apply path like
         * "ci-cd". The set of fields is always in the version that the
         * workflow used when modifying the object.
         *
         * +optional
         * +listType=atomic
         */
        managedFields?: /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource
         * that the fieldset applies to.
         */
        V1ManagedFieldsEntry[];
        /**
         * Name must be unique within a namespace. Is required when creating resources, although
         * some resources may allow a client to request the generation of an appropriate name
         * automatically. Name is primarily intended for creation idempotence and configuration
         * definition.
         * Cannot be updated.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
         * +optional
         */
        name?: string;
        /**
         * Namespace defines the space within which each name must be unique. An empty namespace is
         * equivalent to the "default" namespace, but "default" is the canonical representation.
         * Not all objects are required to be scoped to a namespace - the value of this field for
         * those objects will be empty.
         *
         * Must be a DNS_LABEL.
         * Cannot be updated.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
         * +optional
         */
        namespace?: string;
        /**
         * List of objects depended by this object. If ALL objects in the list have
         * been deleted, this object will be garbage collected. If this object is managed by a controller,
         * then an entry in this list will point to this controller, with the controller field set to true.
         * There cannot be more than one managing controller.
         * +optional
         * +patchMergeKey=uid
         * +patchStrategy=merge
         * +listType=map
         * +listMapKey=uid
         */
        ownerReferences?: /**
         * OwnerReference contains enough information to let you identify an owning
         * object. An owning object must be in the same namespace as the dependent, or
         * be cluster-scoped, so there is no namespace field.
         * +structType=atomic
         */
        V1OwnerReference[];
        /**
         * An opaque value that represents the internal version of this object that can
         * be used by clients to determine when objects have changed. May be used for optimistic
         * concurrency, change detection, and the watch operation on a resource or set of resources.
         * Clients must treat these values as opaque and passed unmodified back to the server.
         * They may only be valid for a particular resource or set of resources.
         *
         * Populated by the system.
         * Read-only.
         * Value must be treated as opaque by clients and .
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
         * +optional
         */
        resourceVersion?: string;
        /**
         * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
         * +optional
         */
        selfLink?: string;
        /**
         * UID is the unique in time and space value for this object. It is typically generated by
         * the server on successful creation of a resource and is not allowed to change on PUT
         * operations.
         *
         * Populated by the system.
         * Read-only.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
         * +optional
         */
        uid?: string;
    }
    /**
     * ObjectReference contains enough information to let you inspect or modify the referred object.
     * ---
     * New uses of this type are discouraged because of difficulty describing its usage when embedded in APIs.
     *  1. Ignored fields.  It includes many fields which are not generally honored.  For instance, ResourceVersion and FieldPath are both very rarely valid in actual usage.
     *  2. Invalid usage help.  It is impossible to add specific help for individual usage.  In most embedded usages, there are particular
     *     restrictions like, "must refer only to types A and B" or "UID not honored" or "name must be restricted".
     *     Those cannot be well described when embedded.
     *  3. Inconsistent validation.  Because the usages are different, the validation rules are different by usage, which makes it hard for users to predict what will happen.
     *  4. The fields are both imprecise and overly precise.  Kind is not a precise mapping to a URL. This can produce ambiguity
     *     during interpretation and require a REST mapping.  In most cases, the dependency is on the group,resource tuple
     *     and the version of the actual struct is irrelevant.
     *  5. We cannot easily change it.  Because this type is embedded in many locations, updates to this type
     *     will affect numerous schemas.  Don't make new APIs embed an underspecified API type they do not control.
     *
     * Instead of using this type, create a locally provided and used type that is well-focused on your reference.
     * For example, ServiceReferences for admission registration: https://github.com/kubernetes/api/blob/release-1.17/admissionregistration/v1/types.go#L533 .
     * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
     * +structType=atomic
     */
    export interface V1ObjectReference {
        /**
         * API version of the referent.
         * +optional
         */
        apiVersion?: string;
        /**
         * If referring to a piece of an object instead of an entire object, this string
         * should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].
         * For example, if the object reference is to a container within a pod, this would take on a value like:
         * "spec.containers{name}" (where "name" refers to the name of the container that triggered
         * the event) or if no container name is specified "spec.containers[2]" (container with
         * index 2 in this pod). This syntax is chosen only to have some well-defined way of
         * referencing a part of an object.
         * TODO: this design is not final and this field is subject to change in the future.
         * +optional
         */
        fieldPath?: string;
        /**
         * Kind of the referent.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         * +optional
         */
        kind?: string;
        /**
         * Name of the referent.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         * +optional
         */
        name?: string;
        /**
         * Namespace of the referent.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         * +optional
         */
        namespace?: string;
        /**
         * Specific resourceVersion to which this reference is made, if any.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
         * +optional
         */
        resourceVersion?: string;
        /**
         * UID of the referent.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
         * +optional
         */
        uid?: string;
    }
    /**
     * OwnerReference contains enough information to let you identify an owning
     * object. An owning object must be in the same namespace as the dependent, or
     * be cluster-scoped, so there is no namespace field.
     * +structType=atomic
     */
    export interface V1OwnerReference {
        /**
         * API version of the referent.
         */
        apiVersion?: string;
        /**
         * If true, AND if the owner has the "foregroundDeletion" finalizer, then
         * the owner cannot be deleted from the key-value store until this
         * reference is removed.
         * See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion
         * for how the garbage collector interacts with this field and enforces the foreground deletion.
         * Defaults to false.
         * To set this field, a user needs "delete" permission of the owner,
         * otherwise 422 (Unprocessable Entity) will be returned.
         * +optional
         */
        blockOwnerDeletion?: boolean;
        /**
         * If true, this reference points to the managing controller.
         * +optional
         */
        controller?: boolean;
        /**
         * Kind of the referent.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        kind?: string;
        /**
         * Name of the referent.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
         */
        name?: string;
        /**
         * UID of the referent.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
         */
        uid?: string;
    }
    export interface V1PortStatus {
        /**
         * Error is to record the problem with the service port
         * The format of the error shall comply with the following rules:
         * - built-in error values shall be specified in this file and those shall use
         *   CamelCase names
         * - cloud provider specific error values must have names that comply with the
         *   format foo.example.com/CamelCase.
         * ---
         * The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
         * +optional
         * +kubebuilder:validation:Required
         * +kubebuilder:validation:Pattern=`^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*​/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$`
         * +kubebuilder:validation:MaxLength=316
         */
        error?: string;
        /**
         * Port is the port number of the service port of which status is recorded here
         */
        port?: number; // int32
        /**
         * Protocol is the protocol of the service port of which status is recorded here
         * The supported values are: "TCP", "UDP", "SCTP"
         */
        protocol?: string;
    }
    /**
     * Time is a wrapper around time.Time which supports correct
     * marshaling to YAML and JSON.  Wrappers are provided for many
     * of the factory methods that the time package offers.
     *
     * +protobuf.options.marshal=false
     * +protobuf.as=Timestamp
     * +protobuf.options.(gogoproto.goproto_stringer)=false
     */
    export type V1Time = string; // date-time
    /**
     * AWSAuthConfig is an AWS IAM authentication configuration
     */
    export interface V1alpha1AWSAuthConfig {
        /**
         * ClusterName contains AWS cluster name
         */
        clusterName?: string;
        /**
         * Profile contains optional role ARN. If set then AWS IAM Authenticator uses the profile to perform cluster operations instead of the default AWS credential provider chain.
         */
        profile?: string;
        /**
         * RoleARN contains optional role ARN. If set then AWS IAM Authenticator assume a role to perform cluster operations instead of the default AWS credential provider chain.
         */
        roleARN?: string;
    }
    /**
     * AppProject provides a logical grouping of applications, providing controls for:
     * * where the apps may deploy to (cluster whitelist)
     * * what may be deployed (repository whitelist, resource whitelist/blacklist)
     * * who can access these applications (roles, OIDC group claims bindings)
     * * and what they can do (RBAC policies)
     * * automation access to these roles (JWT tokens)
     * +genclient
     * +genclient:noStatus
     * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
     * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
     */
    export interface V1alpha1AppProject {
        metadata?: /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects
         * users must create.
         */
        V1ObjectMeta;
        spec?: /* AppProjectSpec is the specification of an AppProject */ V1alpha1AppProjectSpec;
        status?: /* AppProjectStatus contains status information for AppProject CRs */ V1alpha1AppProjectStatus;
    }
    /**
     * AppProjectList is list of AppProject resources
     * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
     */
    export interface V1alpha1AppProjectList {
        items?: /**
         * AppProject provides a logical grouping of applications, providing controls for:
         * * where the apps may deploy to (cluster whitelist)
         * * what may be deployed (repository whitelist, resource whitelist/blacklist)
         * * who can access these applications (roles, OIDC group claims bindings)
         * * and what they can do (RBAC policies)
         * * automation access to these roles (JWT tokens)
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
         */
        V1alpha1AppProject[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
    }
    /**
     * AppProjectSpec is the specification of an AppProject
     */
    export interface V1alpha1AppProjectSpec {
        /**
         * ClusterResourceBlacklist contains list of blacklisted cluster level resources
         */
        clusterResourceBlacklist?: /**
         * GroupKind specifies a Group and a Kind, but does not force a version.  This is useful for identifying
         * concepts during lookup stages without having partially valid types
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1GroupKind[];
        /**
         * ClusterResourceWhitelist contains list of whitelisted cluster level resources
         */
        clusterResourceWhitelist?: /**
         * GroupKind specifies a Group and a Kind, but does not force a version.  This is useful for identifying
         * concepts during lookup stages without having partially valid types
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1GroupKind[];
        /**
         * Description contains optional project description
         */
        description?: string;
        /**
         * DestinationServiceAccounts holds information about the service accounts to be impersonated for the application sync operation for each destination.
         */
        destinationServiceAccounts?: /* ApplicationDestinationServiceAccount holds information about the service account to be impersonated for the application sync operation. */ V1alpha1ApplicationDestinationServiceAccount[];
        /**
         * Destinations contains list of destinations available for deployment
         */
        destinations?: /* ApplicationDestination holds information about the application's destination */ V1alpha1ApplicationDestination[];
        /**
         * NamespaceResourceBlacklist contains list of blacklisted namespace level resources
         */
        namespaceResourceBlacklist?: /**
         * GroupKind specifies a Group and a Kind, but does not force a version.  This is useful for identifying
         * concepts during lookup stages without having partially valid types
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1GroupKind[];
        /**
         * NamespaceResourceWhitelist contains list of whitelisted namespace level resources
         */
        namespaceResourceWhitelist?: /**
         * GroupKind specifies a Group and a Kind, but does not force a version.  This is useful for identifying
         * concepts during lookup stages without having partially valid types
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1GroupKind[];
        orphanedResources?: /* OrphanedResourcesMonitorSettings holds settings of orphaned resources monitoring */ V1alpha1OrphanedResourcesMonitorSettings;
        /**
         * PermitOnlyProjectScopedClusters determines whether destinations can only reference clusters which are project-scoped
         */
        permitOnlyProjectScopedClusters?: boolean;
        /**
         * Roles are user defined RBAC roles associated with this project
         */
        roles?: /* ProjectRole represents a role that has access to a project */ V1alpha1ProjectRole[];
        /**
         * SignatureKeys contains a list of PGP key IDs that commits in Git must be signed with in order to be allowed for sync
         */
        signatureKeys?: /* SignatureKey is the specification of a key required to verify commit signatures with */ V1alpha1SignatureKey[];
        /**
         * SourceNamespaces defines the namespaces application resources are allowed to be created in
         */
        sourceNamespaces?: string[];
        /**
         * SourceRepos contains list of repository URLs which can be used for deployment
         */
        sourceRepos?: string[];
        /**
         * SyncWindows controls when syncs can be run for apps in this project
         */
        syncWindows?: /* SyncWindow contains the kind, time, duration and attributes that are used to assign the syncWindows to apps */ V1alpha1SyncWindow[];
    }
    /**
     * AppProjectStatus contains status information for AppProject CRs
     */
    export interface V1alpha1AppProjectStatus {
        /**
         * JWTTokensByRole contains a list of JWT tokens issued for a given role
         */
        jwtTokensByRole?: {
            [name: string]: /* JWTTokens represents a list of JWT tokens */ V1alpha1JWTTokens;
        };
    }
    /**
     * Application is a definition of Application resource.
     * +genclient
     * +genclient:noStatus
     * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
     * +kubebuilder:resource:path=applications,shortName=app;apps
     * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
     * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
     * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
     * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
     */
    export interface V1alpha1Application {
        metadata?: /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects
         * users must create.
         */
        V1ObjectMeta;
        operation?: /* Operation contains information about a requested or running operation */ V1alpha1Operation;
        spec?: /* ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision. */ V1alpha1ApplicationSpec;
        status?: /* ApplicationStatus contains status information for the application */ V1alpha1ApplicationStatus;
    }
    /**
     * ApplicationCondition contains details about an application condition, which is usually an error or warning
     */
    export interface V1alpha1ApplicationCondition {
        lastTransitionTime?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Message contains human-readable message indicating details about condition
         */
        message?: string;
        /**
         * Type is an application condition type
         */
        type?: string;
    }
    /**
     * ApplicationDestination holds information about the application's destination
     */
    export interface V1alpha1ApplicationDestination {
        /**
         * Name is an alternate way of specifying the target cluster by its symbolic name. This must be set if Server is not set.
         */
        name?: string;
        /**
         * Namespace specifies the target namespace for the application's resources.
         * The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace
         */
        namespace?: string;
        /**
         * Server specifies the URL of the target cluster's Kubernetes control plane API. This must be set if Name is not set.
         */
        server?: string;
    }
    /**
     * ApplicationDestinationServiceAccount holds information about the service account to be impersonated for the application sync operation.
     */
    export interface V1alpha1ApplicationDestinationServiceAccount {
        /**
         * DefaultServiceAccount to be used for impersonation during the sync operation
         */
        defaultServiceAccount?: string;
        /**
         * Namespace specifies the target namespace for the application's resources.
         */
        namespace?: string;
        /**
         * Server specifies the URL of the target cluster's Kubernetes control plane API.
         */
        server?: string;
    }
    export interface V1alpha1ApplicationLabelStats {
        key?: string;
        values?: string[];
    }
    /**
     * ApplicationList is list of Application resources
     * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
     */
    export interface V1alpha1ApplicationList {
        items?: /**
         * Application is a definition of Application resource.
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=applications,shortName=app;apps
         * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
         * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
         * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
         * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
         */
        V1alpha1Application[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
        stats?: /* ApplicationListStats holds additional information about the list of applications */ V1alpha1ApplicationListStats;
    }
    /**
     * ApplicationListStats holds additional information about the list of applications
     */
    export interface V1alpha1ApplicationListStats {
        autoSyncEnabledCount?: number; // int64
        destinations?: /* ApplicationDestination holds information about the application's destination */ V1alpha1ApplicationDestination[];
        labels?: V1alpha1ApplicationLabelStats[];
        namespaces?: string[];
        total?: number; // int64
        totalByHealthStatus?: {
            [name: string]: string; // int64
        };
        totalBySyncStatus?: {
            [name: string]: string; // int64
        };
    }
    export interface V1alpha1ApplicationMatchExpression {
        key?: string;
        operator?: string;
        values?: string[];
    }
    export interface V1alpha1ApplicationPreservedFields {
        annotations?: string[];
        labels?: string[];
    }
    /**
     * ApplicationSet is a set of Application resources
     * +genclient
     * +genclient:noStatus
     * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
     * +kubebuilder:resource:path=applicationsets,shortName=appset;appsets
     * +kubebuilder:subresource:status
     */
    export interface V1alpha1ApplicationSet {
        metadata?: /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects
         * users must create.
         */
        V1ObjectMeta;
        spec?: /* ApplicationSetSpec represents a class of application set state. */ V1alpha1ApplicationSetSpec;
        status?: /* ApplicationSetStatus defines the observed state of ApplicationSet */ V1alpha1ApplicationSetStatus;
    }
    /**
     * ApplicationSetApplicationStatus contains details about each Application managed by the ApplicationSet
     */
    export interface V1alpha1ApplicationSetApplicationStatus {
        /**
         * Application contains the name of the Application resource
         */
        application?: string;
        lastTransitionTime?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Message contains human-readable message indicating details about the status
         */
        message?: string;
        /**
         * Status contains the AppSet's perceived status of the managed Application resource: (Waiting, Pending, Progressing, Healthy)
         */
        status?: string;
        /**
         * Step tracks which step this Application should be updated in
         */
        step?: string;
        /**
         * TargetRevision tracks the desired revisions the Application should be synced to.
         */
        targetrevisions?: string[];
    }
    /**
     * ApplicationSetCondition contains details about an applicationset condition, which is usually an error or warning
     */
    export interface V1alpha1ApplicationSetCondition {
        lastTransitionTime?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Message contains human-readable message indicating details about condition
         */
        message?: string;
        /**
         * Single word camelcase representing the reason for the status eg ErrorOccurred
         */
        reason?: string;
        /**
         * True/False/Unknown
         */
        status?: string;
        /**
         * Type is an applicationset condition type
         */
        type?: string;
    }
    export interface V1alpha1ApplicationSetFilter {
        expressions?: string[];
    }
    /**
     * ApplicationSetGenerator represents a generator at the top level of an ApplicationSet.
     */
    export interface V1alpha1ApplicationSetGenerator {
        clusterDecisionResource?: /* DuckType defines a generator to match against clusters registered with ArgoCD. */ V1alpha1DuckTypeGenerator;
        clusters?: /* ClusterGenerator defines a generator to match against clusters registered with ArgoCD. */ V1alpha1ClusterGenerator;
        git?: V1alpha1GitGenerator;
        list?: /* ListGenerator include items info */ V1alpha1ListGenerator;
        matrix?: /**
         * MatrixGenerator generates the cartesian product of two sets of parameters. The parameters are defined by two nested
         * generators.
         */
        V1alpha1MatrixGenerator;
        merge?: /**
         * MergeGenerator merges the output of two or more generators. Where the values for all specified merge keys are equal
         * between two sets of generated parameters, the parameter sets will be merged with the parameters from the latter
         * generator taking precedence. Parameter sets with merge keys not present in the base generator's params will be
         * ignored.
         * For example, if the first generator produced [{a: '1', b: '2'}, {c: '1', d: '1'}] and the second generator produced
         * [{'a': 'override'}], the united parameters for merge keys = ['a'] would be
         * [{a: 'override', b: '1'}, {c: '1', d: '1'}].
         *
         * MergeGenerator supports template overriding. If a MergeGenerator is one of multiple top-level generators, its
         * template will be merged with the top-level generator before the parameters are applied.
         */
        V1alpha1MergeGenerator;
        plugin?: /* PluginGenerator defines connection info specific to Plugin. */ V1alpha1PluginGenerator;
        pullRequest?: /* PullRequestGenerator defines a generator that scrapes a PullRequest API to find candidate pull requests. */ V1alpha1PullRequestGenerator;
        scmProvider?: /* SCMProviderGenerator defines a generator that scrapes a SCMaaS API to find candidate repos. */ V1alpha1SCMProviderGenerator;
        selector?: /**
         * A label selector is a label query over a set of resources. The result of matchLabels and
         * matchExpressions are ANDed. An empty label selector matches all objects. A null
         * label selector matches no objects.
         * +structType=atomic
         */
        V1LabelSelector;
    }
    /**
     * ApplicationSetList contains a list of ApplicationSet
     * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
     * +kubebuilder:object:root=true
     */
    export interface V1alpha1ApplicationSetList {
        items?: /**
         * ApplicationSet is a set of Application resources
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=applicationsets,shortName=appset;appsets
         * +kubebuilder:subresource:status
         */
        V1alpha1ApplicationSet[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
    }
    /**
     * ApplicationSetNestedGenerator represents a generator nested within a combination-type generator (MatrixGenerator or
     * MergeGenerator).
     */
    export interface V1alpha1ApplicationSetNestedGenerator {
        clusterDecisionResource?: /* DuckType defines a generator to match against clusters registered with ArgoCD. */ V1alpha1DuckTypeGenerator;
        clusters?: /* ClusterGenerator defines a generator to match against clusters registered with ArgoCD. */ V1alpha1ClusterGenerator;
        git?: V1alpha1GitGenerator;
        list?: /* ListGenerator include items info */ V1alpha1ListGenerator;
        matrix?: /**
         * JSON represents any valid JSON value.
         * These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
         */
        V1JSON;
        merge?: /**
         * JSON represents any valid JSON value.
         * These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
         */
        V1JSON;
        plugin?: /* PluginGenerator defines connection info specific to Plugin. */ V1alpha1PluginGenerator;
        pullRequest?: /* PullRequestGenerator defines a generator that scrapes a PullRequest API to find candidate pull requests. */ V1alpha1PullRequestGenerator;
        scmProvider?: /* SCMProviderGenerator defines a generator that scrapes a SCMaaS API to find candidate repos. */ V1alpha1SCMProviderGenerator;
        selector?: /**
         * A label selector is a label query over a set of resources. The result of matchLabels and
         * matchExpressions are ANDed. An empty label selector matches all objects. A null
         * label selector matches no objects.
         * +structType=atomic
         */
        V1LabelSelector;
    }
    /**
     * ApplicationSetResourceIgnoreDifferences configures how the ApplicationSet controller will ignore differences in live
     * applications when applying changes from generated applications.
     */
    export interface V1alpha1ApplicationSetResourceIgnoreDifferences {
        /**
         * JQPathExpressions is a list of JQ path expressions to fields to ignore differences for.
         */
        jqPathExpressions?: string[];
        /**
         * JSONPointers is a list of JSON pointers to fields to ignore differences for.
         */
        jsonPointers?: string[];
        /**
         * Name is the name of the application to ignore differences for. If not specified, the rule applies to all applications.
         */
        name?: string;
    }
    export interface V1alpha1ApplicationSetRolloutStep {
        matchExpressions?: V1alpha1ApplicationMatchExpression[];
        maxUpdate?: /**
         * IntOrString is a type that can hold an int32 or a string.  When used in
         * JSON or YAML marshalling and unmarshalling, it produces or consumes the
         * inner type.  This allows you to have, for example, a JSON field that can
         * accept a name or number.
         * TODO: Rename to Int32OrString
         * +protobuf=true
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         * +k8s:openapi-gen=true
         */
        IntstrIntOrString;
    }
    export interface V1alpha1ApplicationSetRolloutStrategy {
        steps?: V1alpha1ApplicationSetRolloutStep[];
    }
    /**
     * ApplicationSetSpec represents a class of application set state.
     */
    export interface V1alpha1ApplicationSetSpec {
        /**
         * ApplyNestedSelectors enables selectors defined within the generators of two level-nested matrix or merge generators
         */
        applyNestedSelectors?: boolean;
        filter?: V1alpha1ApplicationSetFilter;
        generators?: /* ApplicationSetGenerator represents a generator at the top level of an ApplicationSet. */ V1alpha1ApplicationSetGenerator[];
        goTemplate?: boolean;
        goTemplateOptions?: string[];
        ignoreApplicationDifferences?: /**
         * ApplicationSetResourceIgnoreDifferences configures how the ApplicationSet controller will ignore differences in live
         * applications when applying changes from generated applications.
         */
        V1alpha1ApplicationSetResourceIgnoreDifferences[];
        preservedFields?: V1alpha1ApplicationPreservedFields;
        strategy?: /* ApplicationSetStrategy configures how generated Applications are updated in sequence. */ V1alpha1ApplicationSetStrategy;
        syncPolicy?: /**
         * ApplicationSetSyncPolicy configures how generated Applications will relate to their
         * ApplicationSet.
         */
        V1alpha1ApplicationSetSyncPolicy;
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
        templatePatch?: string;
    }
    /**
     * ApplicationSetStatus defines the observed state of ApplicationSet
     */
    export interface V1alpha1ApplicationSetStatus {
        applicationStatus?: /* ApplicationSetApplicationStatus contains details about each Application managed by the ApplicationSet */ V1alpha1ApplicationSetApplicationStatus[];
        /**
         * INSERT ADDITIONAL STATUS FIELD - define observed state of cluster
         * Important: Run "make" to regenerate code after modifying this file
         */
        conditions?: /* ApplicationSetCondition contains details about an applicationset condition, which is usually an error or warning */ V1alpha1ApplicationSetCondition[];
        /**
         * Resources is a list of Applications resources managed by this application set.
         */
        resources?: /**
         * ResourceStatus holds the current sync and health status of a resource
         * TODO: describe members of this type
         */
        Applicationv1alpha1ResourceStatus[];
    }
    /**
     * ApplicationSetStrategy configures how generated Applications are updated in sequence.
     */
    export interface V1alpha1ApplicationSetStrategy {
        rollingSync?: V1alpha1ApplicationSetRolloutStrategy;
        type?: string;
    }
    /**
     * ApplicationSetSyncPolicy configures how generated Applications will relate to their
     * ApplicationSet.
     */
    export interface V1alpha1ApplicationSetSyncPolicy {
        /**
         * ApplicationsSync represents the policy applied on the generated applications. Possible values are create-only, create-update, create-delete, sync
         * +kubebuilder:validation:Optional
         * +kubebuilder:validation:Enum=create-only;create-update;create-delete;sync
         */
        applicationsSync?: string;
        /**
         * PreserveResourcesOnDeletion will preserve resources on deletion. If PreserveResourcesOnDeletion is set to true, these Applications will not be deleted.
         */
        preserveResourcesOnDeletion?: boolean;
    }
    /**
     * ApplicationSetTemplate represents argocd ApplicationSpec
     */
    export interface V1alpha1ApplicationSetTemplate {
        metadata?: /**
         * ApplicationSetTemplateMeta represents the Argo CD application fields that may
         * be used for Applications generated from the ApplicationSet (based on metav1.ObjectMeta)
         */
        V1alpha1ApplicationSetTemplateMeta;
        spec?: /* ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision. */ V1alpha1ApplicationSpec;
    }
    /**
     * ApplicationSetTemplateMeta represents the Argo CD application fields that may
     * be used for Applications generated from the ApplicationSet (based on metav1.ObjectMeta)
     */
    export interface V1alpha1ApplicationSetTemplateMeta {
        annotations?: {
            [name: string]: string;
        };
        finalizers?: string[];
        labels?: {
            [name: string]: string;
        };
        name?: string;
        namespace?: string;
    }
    /**
     * ApplicationSetTree holds nodes which belongs to the application
     * Used to build a tree of an ApplicationSet and its children
     */
    export interface V1alpha1ApplicationSetTree {
        /**
         * Nodes contains list of nodes which are directly managed by the applicationset
         */
        nodes?: /**
         * ResourceNode contains information about live resource and its children
         * TODO: describe members of this type
         */
        V1alpha1ResourceNode[];
    }
    /**
     * ApplicationSource contains all required information about the source of an application
     */
    export interface V1alpha1ApplicationSource {
        /**
         * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
         */
        chart?: string;
        customization?: /* ApplicationSourceCustomization holds the customization for the application source */ V1alpha1ApplicationSourceCustomization;
        directory?: /* ApplicationSourceDirectory holds options for applications of type plain YAML or Jsonnet */ V1alpha1ApplicationSourceDirectory;
        helm?: /* ApplicationSourceHelm holds helm specific options */ V1alpha1ApplicationSourceHelm;
        kustomize?: /* ApplicationSourceKustomize holds options specific to an Application source specific to Kustomize */ V1alpha1ApplicationSourceKustomize;
        /**
         * Name is used to refer to a source and is displayed in the UI. It is used in multi-source Applications.
         */
        name?: string;
        /**
         * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
         */
        path?: string;
        plugin?: /* ApplicationSourcePlugin holds options specific to config management plugins */ V1alpha1ApplicationSourcePlugin;
        /**
         * Ref is reference to another source within sources field. This field will not be used if used with a `source` tag.
         */
        ref?: string;
        /**
         * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
         */
        repoURL?: string;
        /**
         * TargetRevision defines the revision of the source to sync the application to.
         * In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
         * In case of Helm, this is a semver tag for the Chart's version.
         */
        targetRevision?: string;
    }
    /**
     * ApplicationSourceCustomization holds the customization for the application source
     */
    export interface V1alpha1ApplicationSourceCustomization {
        exclude?: /* ResourceMatcher holds the filter for the resource */ V1alpha1ResourceMatcher[];
        include?: /* ResourceMatcher holds the filter for the resource */ V1alpha1ResourceMatcher[];
    }
    /**
     * ApplicationSourceDirectory holds options for applications of type plain YAML or Jsonnet
     */
    export interface V1alpha1ApplicationSourceDirectory {
        /**
         * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
         */
        exclude?: string;
        /**
         * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
         */
        include?: string;
        jsonnet?: /* ApplicationSourceJsonnet holds options specific to applications of type Jsonnet */ V1alpha1ApplicationSourceJsonnet;
        /**
         * Recurse specifies whether to scan a directory recursively for manifests
         */
        recurse?: boolean;
    }
    /**
     * ApplicationSourceHelm holds helm specific options
     */
    export interface V1alpha1ApplicationSourceHelm {
        /**
         * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
         * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
         */
        apiVersions?: string[];
        /**
         * FileParameters are file parameters to the helm template
         */
        fileParameters?: /* HelmFileParameter is a file parameter that's passed to helm template during manifest generation */ V1alpha1HelmFileParameter[];
        /**
         * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
         */
        ignoreMissingValueFiles?: boolean;
        /**
         * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
         * uses the Kubernetes version of the target cluster.
         */
        kubeVersion?: string;
        /**
         * Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace.
         */
        namespace?: string;
        /**
         * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
         */
        parameters?: /* HelmParameter is a parameter that's passed to helm template during manifest generation */ V1alpha1HelmParameter[];
        /**
         * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
         */
        passCredentials?: boolean;
        /**
         * ReleaseName is the Helm release name to use. If omitted it will use the application name
         */
        releaseName?: string;
        /**
         * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
         */
        skipCrds?: boolean;
        /**
         * SkipSchemaValidation skips JSON schema validation (Helm's --skip-schema-validation)
         */
        skipSchemaValidation?: boolean;
        /**
         * SkipTests skips test manifest installation step (Helm's --skip-tests).
         */
        skipTests?: boolean;
        /**
         * ValuesFiles is a list of Helm value files to use when generating a template
         */
        valueFiles?: string[];
        /**
         * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
         * +patchStrategy=replace
         */
        values?: string;
        valuesObject?: /**
         * RawExtension is used to hold extensions in external versions.
         *
         * To use this, make a field which has RawExtension as its type in your external, versioned
         * struct, and Object in your internal struct. You also need to register your
         * various plugin types.
         *
         * // Internal package:
         *
         * 	type MyAPIObject struct {
         * 		runtime.TypeMeta `json:",inline"`
         * 		MyPlugin runtime.Object `json:"myPlugin"`
         * 	}
         *
         * 	type PluginA struct {
         * 		AOption string `json:"aOption"`
         * 	}
         *
         * // External package:
         *
         * 	type MyAPIObject struct {
         * 		runtime.TypeMeta `json:",inline"`
         * 		MyPlugin runtime.RawExtension `json:"myPlugin"`
         * 	}
         *
         * 	type PluginA struct {
         * 		AOption string `json:"aOption"`
         * 	}
         *
         * // On the wire, the JSON will look something like this:
         *
         * 	{
         * 		"kind":"MyAPIObject",
         * 		"apiVersion":"v1",
         * 		"myPlugin": {
         * 			"kind":"PluginA",
         * 			"aOption":"foo",
         * 		},
         * 	}
         *
         * So what happens? Decode first uses json or yaml to unmarshal the serialized data into
         * your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked.
         * The next step is to copy (using pkg/conversion) into the internal struct. The runtime
         * package's DefaultScheme has conversion functions installed which will unpack the
         * JSON stored in RawExtension, turning it into the correct object type, and storing it
         * in the Object. (TODO: In the case where the object is of an unknown type, a
         * runtime.Unknown object will be created and stored.)
         *
         * +k8s:deepcopy-gen=true
         * +protobuf=true
         * +k8s:openapi-gen=true
         */
        RuntimeRawExtension;
        /**
         * Version is the Helm version to use for templating ("3")
         */
        version?: string;
    }
    /**
     * ApplicationSourceJsonnet holds options specific to applications of type Jsonnet
     */
    export interface V1alpha1ApplicationSourceJsonnet {
        /**
         * ExtVars is a list of Jsonnet External Variables
         */
        extVars?: /* JsonnetVar represents a variable to be passed to jsonnet during manifest generation */ V1alpha1JsonnetVar[];
        /**
         * Additional library search dirs
         */
        libs?: string[];
        /**
         * TLAS is a list of Jsonnet Top-level Arguments
         */
        tlas?: /* JsonnetVar represents a variable to be passed to jsonnet during manifest generation */ V1alpha1JsonnetVar[];
    }
    /**
     * ApplicationSourceKustomize holds options specific to an Application source specific to Kustomize
     */
    export interface V1alpha1ApplicationSourceKustomize {
        /**
         * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
         * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
         */
        apiVersions?: string[];
        /**
         * CommonAnnotations is a list of additional annotations to add to rendered manifests
         */
        commonAnnotations?: {
            [name: string]: string;
        };
        /**
         * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
         */
        commonAnnotationsEnvsubst?: boolean;
        /**
         * CommonLabels is a list of additional labels to add to rendered manifests
         */
        commonLabels?: {
            [name: string]: string;
        };
        /**
         * Components specifies a list of kustomize components to add to the kustomization before building
         */
        components?: string[];
        /**
         * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
         */
        forceCommonAnnotations?: boolean;
        /**
         * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
         */
        forceCommonLabels?: boolean;
        /**
         * Images is a list of Kustomize image override specifications
         */
        images?: string[];
        /**
         * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
         * uses the Kubernetes version of the target cluster.
         */
        kubeVersion?: string;
        /**
         * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
         */
        labelWithoutSelector?: boolean;
        /**
         * NamePrefix is a prefix appended to resources for Kustomize apps
         */
        namePrefix?: string;
        /**
         * NameSuffix is a suffix appended to resources for Kustomize apps
         */
        nameSuffix?: string;
        /**
         * Namespace sets the namespace that Kustomize adds to all resources
         */
        namespace?: string;
        /**
         * Patches is a list of Kustomize patches
         */
        patches?: V1alpha1KustomizePatch[];
        /**
         * Replicas is a list of Kustomize Replicas override specifications
         */
        replicas?: V1alpha1KustomizeReplica[];
        /**
         * Version controls which version of Kustomize to use for rendering manifests
         */
        version?: string;
    }
    /**
     * ApplicationSourcePlugin holds options specific to config management plugins
     */
    export interface V1alpha1ApplicationSourcePlugin {
        env?: /* EnvEntry represents an entry in the application's environment */ Applicationv1alpha1EnvEntry[];
        name?: string;
        parameters?: V1alpha1ApplicationSourcePluginParameter[];
    }
    export interface V1alpha1ApplicationSourcePluginParameter {
        /**
         * Array is the value of an array type parameter.
         */
        array?: string[];
        /**
         * Map is the value of a map type parameter.
         */
        map?: {
            [name: string]: string;
        };
        /**
         * Name is the name identifying a parameter.
         */
        name?: string;
        /**
         * String_ is the value of a string type parameter.
         */
        string?: string;
    }
    /**
     * ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision.
     */
    export interface V1alpha1ApplicationSpec {
        destination?: /* ApplicationDestination holds information about the application's destination */ V1alpha1ApplicationDestination;
        /**
         * IgnoreDifferences is a list of resources and their fields which should be ignored during comparison
         */
        ignoreDifferences?: /* ResourceIgnoreDifferences contains resource filter and list of json paths which should be ignored during comparison with live state. */ V1alpha1ResourceIgnoreDifferences[];
        /**
         * Info contains a list of information (URLs, email addresses, and plain text) that relates to the application
         */
        info?: V1alpha1Info[];
        /**
         * Project is a reference to the project this application belongs to.
         * The empty string means that application belongs to the 'default' project.
         */
        project?: string;
        /**
         * RevisionHistoryLimit limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions.
         * This should only be changed in exceptional circumstances.
         * Setting to zero will store no history. This will reduce storage used.
         * Increasing will increase the space used to store the history, so we do not recommend increasing it.
         * Default is 10.
         */
        revisionHistoryLimit?: number; // int64
        source?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource;
        sourceHydrator?: /**
         * SourceHydrator specifies a dry "don't repeat yourself" source for manifests, a sync source from which to sync
         * hydrated manifests, and an optional hydrateTo location to act as a "staging" aread for hydrated manifests.
         */
        V1alpha1SourceHydrator;
        /**
         * Sources is a reference to the location of the application's manifests or chart
         */
        sources?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource[];
        syncPolicy?: /* SyncPolicy controls when a sync will be performed in response to updates in git */ V1alpha1SyncPolicy;
    }
    /**
     * ApplicationStatus contains status information for the application
     */
    export interface V1alpha1ApplicationStatus {
        /**
         * Conditions is a list of currently observed application conditions
         */
        conditions?: /* ApplicationCondition contains details about an application condition, which is usually an error or warning */ V1alpha1ApplicationCondition[];
        /**
         * ControllerNamespace indicates the namespace in which the application controller is located
         */
        controllerNamespace?: string;
        health?: /* HealthStatus contains information about the currently observed health state of an application or resource */ V1alpha1HealthStatus;
        /**
         * History contains information about the application's sync history
         */
        history?: /* RevisionHistory contains history information about a previous sync */ V1alpha1RevisionHistory[];
        observedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        operationState?: /* OperationState contains information about state of a running operation */ V1alpha1OperationState;
        reconciledAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * ResourceHealthSource indicates where the resource health status is stored: inline if not set or appTree
         */
        resourceHealthSource?: string;
        /**
         * Resources is a list of Kubernetes resources managed by this application
         */
        resources?: /**
         * ResourceStatus holds the current sync and health status of a resource
         * TODO: describe members of this type
         */
        Applicationv1alpha1ResourceStatus[];
        sourceHydrator?: /* SourceHydratorStatus contains information about the current state of source hydration */ V1alpha1SourceHydratorStatus;
        /**
         * SourceType specifies the type of this application
         */
        sourceType?: string;
        /**
         * SourceTypes specifies the type of the sources included in the application
         */
        sourceTypes?: string[];
        summary?: /* ApplicationSummary contains information about URLs and container images used by an application */ V1alpha1ApplicationSummary;
        sync?: /* SyncStatus contains information about the currently observed live and desired states of an application */ V1alpha1SyncStatus;
    }
    /**
     * ApplicationSummary contains information about URLs and container images used by an application
     */
    export interface V1alpha1ApplicationSummary {
        /**
         * ExternalURLs holds all external URLs of application child resources.
         */
        externalURLs?: string[];
        /**
         * Images holds all images of application child resources.
         */
        images?: string[];
    }
    /**
     * ApplicationTree holds nodes which belongs to the application
     * TODO: describe purpose of this type
     */
    export interface V1alpha1ApplicationTree {
        /**
         * Hosts holds list of Kubernetes nodes that run application related pods
         */
        hosts?: /**
         * HostInfo holds host name and resources metrics
         * TODO: describe purpose of this type
         * TODO: describe members of this type
         */
        V1alpha1HostInfo[];
        /**
         * Nodes contains list of nodes which either directly managed by the application and children of directly managed nodes.
         */
        nodes?: /**
         * ResourceNode contains information about live resource and its children
         * TODO: describe members of this type
         */
        V1alpha1ResourceNode[];
        /**
         * OrphanedNodes contains if or orphaned nodes: nodes which are not managed by the app but in the same namespace. List is populated only if orphaned resources enabled in app project.
         */
        orphanedNodes?: /**
         * ResourceNode contains information about live resource and its children
         * TODO: describe members of this type
         */
        V1alpha1ResourceNode[];
        /**
         * ShardsCount contains total number of shards the application tree is split into
         */
        shardsCount?: number; // int64
    }
    /**
     * ApplicationWatchEvent contains information about application change.
     */
    export interface V1alpha1ApplicationWatchEvent {
        application?: /**
         * Application is a definition of Application resource.
         * +genclient
         * +genclient:noStatus
         * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
         * +kubebuilder:resource:path=applications,shortName=app;apps
         * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
         * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
         * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
         * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
         */
        V1alpha1Application;
        type?: string;
    }
    /**
     * Backoff is the backoff strategy to use on subsequent retries for failing syncs
     */
    export interface V1alpha1Backoff {
        /**
         * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")
         */
        duration?: string;
        /**
         * Factor is a factor to multiply the base duration after each failed retry
         */
        factor?: number; // int64
        /**
         * MaxDuration is the maximum amount of time allowed for the backoff strategy
         */
        maxDuration?: string;
    }
    /**
     * BasicAuthBitbucketServer defines the username/(password or personal access token) for Basic auth.
     */
    export interface V1alpha1BasicAuthBitbucketServer {
        passwordRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
        /**
         * Username for Basic auth
         */
        username?: string;
    }
    /**
     * BearerTokenBitbucket defines the Bearer token for BitBucket AppToken auth.
     */
    export interface V1alpha1BearerTokenBitbucket {
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
    }
    /**
     * BearerTokenBitbucketCloud defines the Bearer token for BitBucket AppToken auth.
     */
    export interface V1alpha1BearerTokenBitbucketCloud {
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
    }
    /**
     * ChartDetails contains helm chart metadata for a specific version
     */
    export interface V1alpha1ChartDetails {
        description?: string;
        /**
         * The URL of this projects home page, e.g. "http://example.com"
         */
        home?: string;
        /**
         * List of maintainer details, name and email, e.g. ["John Doe <john_doe@my-company.com>"]
         */
        maintainers?: string[];
    }
    /**
     * Cluster is the definition of a cluster resource
     */
    export interface V1alpha1Cluster {
        /**
         * Annotations for cluster secret metadata
         */
        annotations?: {
            [name: string]: string;
        };
        /**
         * Indicates if cluster level resources should be managed. This setting is used only if cluster is connected in a namespaced mode.
         */
        clusterResources?: boolean;
        config?: /**
         * ClusterConfig is the configuration attributes. This structure is subset of the go-client
         * rest.Config with annotations added for marshalling.
         */
        V1alpha1ClusterConfig;
        connectionState?: /* ConnectionState contains information about remote resource connection state, currently used for clusters and repositories */ V1alpha1ConnectionState;
        info?: /* ClusterInfo contains information about the cluster */ V1alpha1ClusterInfo;
        /**
         * Labels for cluster secret metadata
         */
        labels?: {
            [name: string]: string;
        };
        /**
         * Name of the cluster. If omitted, will use the server address
         */
        name?: string;
        /**
         * Holds list of namespaces which are accessible in that cluster. Cluster level resources will be ignored if namespace list is not empty.
         */
        namespaces?: string[];
        /**
         * Reference between project and cluster that allow you automatically to be added as item inside Destinations project entity
         */
        project?: string;
        refreshRequestedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Server is the API server URL of the Kubernetes cluster
         */
        server?: string;
        /**
         * Deprecated: use Info.ServerVersion field instead.
         * The server version
         */
        serverVersion?: string;
        /**
         * Shard contains optional shard number. Calculated on the fly by the application controller if not specified.
         */
        shard?: number; // int64
    }
    /**
     * ClusterCacheInfo contains information about the cluster cache
     */
    export interface V1alpha1ClusterCacheInfo {
        /**
         * APIsCount holds number of observed Kubernetes API count
         */
        apisCount?: number; // int64
        lastCacheSyncTime?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * ResourcesCount holds number of observed Kubernetes resources
         */
        resourcesCount?: number; // int64
    }
    /**
     * ClusterConfig is the configuration attributes. This structure is subset of the go-client
     * rest.Config with annotations added for marshalling.
     */
    export interface V1alpha1ClusterConfig {
        awsAuthConfig?: /* AWSAuthConfig is an AWS IAM authentication configuration */ V1alpha1AWSAuthConfig;
        /**
         * Server requires Bearer authentication. This client will not attempt to use
         * refresh tokens for an OAuth2 flow.
         * TODO: demonstrate an OAuth2 compatible client.
         */
        bearerToken?: string;
        /**
         * DisableCompression bypasses automatic GZip compression requests to the server.
         */
        disableCompression?: boolean;
        execProviderConfig?: /**
         * ExecProviderConfig is config used to call an external command to perform cluster authentication
         * See: https://godoc.org/k8s.io/client-go/tools/clientcmd/api#ExecConfig
         */
        V1alpha1ExecProviderConfig;
        password?: string;
        /**
         * ProxyURL is the URL to the proxy to be used for all requests send to the server
         */
        proxyUrl?: string;
        tlsClientConfig?: /* TLSClientConfig contains settings to enable transport layer security */ V1alpha1TLSClientConfig;
        /**
         * Server requires Basic authentication
         */
        username?: string;
    }
    /**
     * ClusterGenerator defines a generator to match against clusters registered with ArgoCD.
     */
    export interface V1alpha1ClusterGenerator {
        /**
         * returns the clusters a single 'clusters' value in the template
         */
        flatList?: boolean;
        selector?: /**
         * A label selector is a label query over a set of resources. The result of matchLabels and
         * matchExpressions are ANDed. An empty label selector matches all objects. A null
         * label selector matches no objects.
         * +structType=atomic
         */
        V1LabelSelector;
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
        /**
         * Values contains key/value pairs which are passed directly as parameters to the template
         */
        values?: {
            [name: string]: string;
        };
    }
    /**
     * ClusterInfo contains information about the cluster
     */
    export interface V1alpha1ClusterInfo {
        /**
         * APIVersions contains list of API versions supported by the cluster
         */
        apiVersions?: string[];
        /**
         * ApplicationsCount is the number of applications managed by Argo CD on the cluster
         */
        applicationsCount?: number; // int64
        cacheInfo?: /* ClusterCacheInfo contains information about the cluster cache */ V1alpha1ClusterCacheInfo;
        connectionState?: /* ConnectionState contains information about remote resource connection state, currently used for clusters and repositories */ V1alpha1ConnectionState;
        /**
         * ServerVersion contains information about the Kubernetes version of the cluster
         */
        serverVersion?: string;
    }
    /**
     * ClusterList is a collection of Clusters.
     */
    export interface V1alpha1ClusterList {
        items?: /* Cluster is the definition of a cluster resource */ V1alpha1Cluster[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
    }
    /**
     * Command holds binary path and arguments list
     */
    export interface V1alpha1Command {
        args?: string[];
        command?: string[];
    }
    /**
     * ComparedTo contains application source and target which was used for resources comparison
     */
    export interface V1alpha1ComparedTo {
        destination?: /* ApplicationDestination holds information about the application's destination */ V1alpha1ApplicationDestination;
        /**
         * IgnoreDifferences is a reference to the application's ignored differences used for comparison
         */
        ignoreDifferences?: /* ResourceIgnoreDifferences contains resource filter and list of json paths which should be ignored during comparison with live state. */ V1alpha1ResourceIgnoreDifferences[];
        source?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource;
        /**
         * Sources is a reference to the application's multiple sources used for comparison
         */
        sources?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource[];
    }
    /**
     * ConfigManagementPlugin contains config management plugin configuration
     */
    export interface V1alpha1ConfigManagementPlugin {
        generate?: /* Command holds binary path and arguments list */ V1alpha1Command;
        init?: /* Command holds binary path and arguments list */ V1alpha1Command;
        lockRepo?: boolean;
        name?: string;
    }
    /**
     * Utility struct for a reference to a configmap key.
     */
    export interface V1alpha1ConfigMapKeyRef {
        configMapName?: string;
        key?: string;
    }
    /**
     * ConnectionState contains information about remote resource connection state, currently used for clusters and repositories
     */
    export interface V1alpha1ConnectionState {
        attemptedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Message contains human readable information about the connection status
         */
        message?: string;
        /**
         * Status contains the current status indicator for the connection
         */
        status?: string;
    }
    /**
     * DrySource specifies a location for dry "don't repeat yourself" manifest source information.
     */
    export interface V1alpha1DrySource {
        /**
         * Path is a directory path within the Git repository where the manifests are located
         */
        path?: string;
        /**
         * RepoURL is the URL to the git repository that contains the application manifests
         */
        repoURL?: string;
        /**
         * TargetRevision defines the revision of the source to hydrate
         */
        targetRevision?: string;
    }
    /**
     * DuckType defines a generator to match against clusters registered with ArgoCD.
     */
    export interface V1alpha1DuckTypeGenerator {
        /**
         * ConfigMapRef is a ConfigMap with the duck type definitions needed to retrieve the data
         *              this includes apiVersion(group/version), kind, matchKey and validation settings
         * Name is the resource name of the kind, group and version, defined in the ConfigMapRef
         * RequeueAfterSeconds is how long before the duckType will be rechecked for a change
         */
        configMapRef?: string;
        labelSelector?: /**
         * A label selector is a label query over a set of resources. The result of matchLabels and
         * matchExpressions are ANDed. An empty label selector matches all objects. A null
         * label selector matches no objects.
         * +structType=atomic
         */
        V1LabelSelector;
        name?: string;
        requeueAfterSeconds?: number; // int64
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
        /**
         * Values contains key/value pairs which are passed directly as parameters to the template
         */
        values?: {
            [name: string]: string;
        };
    }
    /**
     * ExecProviderConfig is config used to call an external command to perform cluster authentication
     * See: https://godoc.org/k8s.io/client-go/tools/clientcmd/api#ExecConfig
     */
    export interface V1alpha1ExecProviderConfig {
        /**
         * Preferred input version of the ExecInfo
         */
        apiVersion?: string;
        /**
         * Arguments to pass to the command when executing it
         */
        args?: string[];
        /**
         * Command to execute
         */
        command?: string;
        /**
         * Env defines additional environment variables to expose to the process
         */
        env?: {
            [name: string]: string;
        };
        /**
         * This text is shown to the user when the executable doesn't seem to be present
         */
        installHint?: string;
    }
    export interface V1alpha1GitDirectoryGeneratorItem {
        exclude?: boolean;
        path?: string;
    }
    export interface V1alpha1GitFileGeneratorItem {
        path?: string;
    }
    export interface V1alpha1GitGenerator {
        directories?: V1alpha1GitDirectoryGeneratorItem[];
        files?: V1alpha1GitFileGeneratorItem[];
        pathParamPrefix?: string;
        repoURL?: string;
        requeueAfterSeconds?: number; // int64
        revision?: string;
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
        /**
         * Values contains key/value pairs which are passed directly as parameters to the template
         */
        values?: {
            [name: string]: string;
        };
    }
    /**
     * GnuPGPublicKey is a representation of a GnuPG public key
     */
    export interface V1alpha1GnuPGPublicKey {
        /**
         * Fingerprint is the fingerprint of the key
         */
        fingerprint?: string;
        /**
         * KeyData holds the raw key data, in base64 encoded format
         */
        keyData?: string;
        /**
         * KeyID specifies the key ID, in hexadecimal string format
         */
        keyID?: string;
        /**
         * Owner holds the owner identification, e.g. a name and e-mail address
         */
        owner?: string;
        /**
         * SubType holds the key's sub type (e.g. rsa4096)
         */
        subType?: string;
        /**
         * Trust holds the level of trust assigned to this key
         */
        trust?: string;
    }
    /**
     * GnuPGPublicKeyList is a collection of GnuPGPublicKey objects
     */
    export interface V1alpha1GnuPGPublicKeyList {
        items?: /* GnuPGPublicKey is a representation of a GnuPG public key */ V1alpha1GnuPGPublicKey[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
    }
    /**
     * HealthStatus contains information about the currently observed health state of an application or resource
     */
    export interface V1alpha1HealthStatus {
        lastTransitionTime?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Message is a human-readable informational message describing the health status
         */
        message?: string;
        /**
         * Status holds the status code of the application or resource
         */
        status?: string;
    }
    /**
     * HelmFileParameter is a file parameter that's passed to helm template during manifest generation
     */
    export interface V1alpha1HelmFileParameter {
        /**
         * Name is the name of the Helm parameter
         */
        name?: string;
        /**
         * Path is the path to the file containing the values for the Helm parameter
         */
        path?: string;
    }
    /**
     * HelmParameter is a parameter that's passed to helm template during manifest generation
     */
    export interface V1alpha1HelmParameter {
        /**
         * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
         */
        forceString?: boolean;
        /**
         * Name is the name of the Helm parameter
         */
        name?: string;
        /**
         * Value is the value for the Helm parameter
         */
        value?: string;
    }
    /**
     * HostInfo holds host name and resources metrics
     * TODO: describe purpose of this type
     * TODO: describe members of this type
     */
    export interface V1alpha1HostInfo {
        name?: string;
        resourcesInfo?: /* TODO: describe this type */ V1alpha1HostResourceInfo[];
        systemInfo?: /* NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */ V1NodeSystemInfo;
    }
    /**
     * TODO: describe this type
     */
    export interface V1alpha1HostResourceInfo {
        capacity?: number; // int64
        requestedByApp?: number; // int64
        requestedByNeighbors?: number; // int64
        resourceName?: string;
    }
    /**
     * HydrateOperation contains information about the most recent hydrate operation
     */
    export interface V1alpha1HydrateOperation {
        /**
         * DrySHA holds the resolved revision (sha) of the dry source as of the most recent reconciliation
         */
        drySHA?: string;
        finishedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * HydratedSHA holds the resolved revision (sha) of the hydrated source as of the most recent reconciliation
         */
        hydratedSHA?: string;
        /**
         * Message contains a message describing the current status of the hydrate operation
         */
        message?: string;
        /**
         * Phase indicates the status of the hydrate operation
         */
        phase?: string;
        sourceHydrator?: /**
         * SourceHydrator specifies a dry "don't repeat yourself" source for manifests, a sync source from which to sync
         * hydrated manifests, and an optional hydrateTo location to act as a "staging" aread for hydrated manifests.
         */
        V1alpha1SourceHydrator;
        startedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
    }
    /**
     * HydrateTo specifies a location to which hydrated manifests should be pushed as a "staging area" before being moved to
     * the SyncSource. The RepoURL and Path are assumed based on the associated SyncSource config in the SourceHydrator.
     */
    export interface V1alpha1HydrateTo {
        /**
         * TargetBranch is the branch to which hydrated manifests should be committed
         */
        targetBranch?: string;
    }
    export interface V1alpha1Info {
        name?: string;
        value?: string;
    }
    /**
     * InfoItem contains arbitrary, human readable information about an application
     */
    export interface V1alpha1InfoItem {
        /**
         * Name is a human readable title for this piece of information.
         */
        name?: string;
        /**
         * Value is human readable content.
         */
        value?: string;
    }
    /**
     * JWTToken holds the issuedAt and expiresAt values of a token
     */
    export interface V1alpha1JWTToken {
        exp?: number; // int64
        iat?: number; // int64
        id?: string;
    }
    /**
     * JWTTokens represents a list of JWT tokens
     */
    export interface V1alpha1JWTTokens {
        items?: /* JWTToken holds the issuedAt and expiresAt values of a token */ V1alpha1JWTToken[];
    }
    /**
     * JsonnetVar represents a variable to be passed to jsonnet during manifest generation
     */
    export interface V1alpha1JsonnetVar {
        code?: boolean;
        name?: string;
        value?: string;
    }
    /**
     * KnownTypeField contains mapping between CRD field and known Kubernetes type.
     * This is mainly used for unit conversion in unknown resources (e.g. 0.1 == 100mi)
     * TODO: Describe the members of this type
     */
    export interface V1alpha1KnownTypeField {
        field?: string;
        type?: string;
    }
    export interface V1alpha1KustomizeGvk {
        group?: string;
        kind?: string;
        version?: string;
    }
    /**
     * KustomizeOptions are options for kustomize to use when building manifests
     */
    export interface V1alpha1KustomizeOptions {
        /**
         * BinaryPath holds optional path to kustomize binary
         */
        binaryPath?: string;
        /**
         * BuildOptions is a string of build parameters to use when calling `kustomize build`
         */
        buildOptions?: string;
    }
    export interface V1alpha1KustomizePatch {
        options?: {
            [name: string]: boolean;
        };
        patch?: string;
        path?: string;
        target?: V1alpha1KustomizeSelector;
    }
    export interface V1alpha1KustomizeReplica {
        count?: /**
         * IntOrString is a type that can hold an int32 or a string.  When used in
         * JSON or YAML marshalling and unmarshalling, it produces or consumes the
         * inner type.  This allows you to have, for example, a JSON field that can
         * accept a name or number.
         * TODO: Rename to Int32OrString
         * +protobuf=true
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         * +k8s:openapi-gen=true
         */
        IntstrIntOrString;
        /**
         * Name of Deployment or StatefulSet
         */
        name?: string;
    }
    export interface V1alpha1KustomizeResId {
        gvk?: V1alpha1KustomizeGvk;
        name?: string;
        namespace?: string;
    }
    export interface V1alpha1KustomizeSelector {
        annotationSelector?: string;
        labelSelector?: string;
        resId?: V1alpha1KustomizeResId;
    }
    /**
     * ListGenerator include items info
     */
    export interface V1alpha1ListGenerator {
        /**
         * +kubebuilder:validation:Optional
         */
        elements?: /**
         * JSON represents any valid JSON value.
         * These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
         */
        V1JSON[];
        elementsYaml?: string;
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
    }
    export interface V1alpha1ManagedNamespaceMetadata {
        annotations?: {
            [name: string]: string;
        };
        labels?: {
            [name: string]: string;
        };
    }
    /**
     * MatrixGenerator generates the cartesian product of two sets of parameters. The parameters are defined by two nested
     * generators.
     */
    export interface V1alpha1MatrixGenerator {
        generators?: /**
         * ApplicationSetNestedGenerator represents a generator nested within a combination-type generator (MatrixGenerator or
         * MergeGenerator).
         */
        V1alpha1ApplicationSetNestedGenerator[];
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
    }
    /**
     * MergeGenerator merges the output of two or more generators. Where the values for all specified merge keys are equal
     * between two sets of generated parameters, the parameter sets will be merged with the parameters from the latter
     * generator taking precedence. Parameter sets with merge keys not present in the base generator's params will be
     * ignored.
     * For example, if the first generator produced [{a: '1', b: '2'}, {c: '1', d: '1'}] and the second generator produced
     * [{'a': 'override'}], the united parameters for merge keys = ['a'] would be
     * [{a: 'override', b: '1'}, {c: '1', d: '1'}].
     *
     * MergeGenerator supports template overriding. If a MergeGenerator is one of multiple top-level generators, its
     * template will be merged with the top-level generator before the parameters are applied.
     */
    export interface V1alpha1MergeGenerator {
        generators?: /**
         * ApplicationSetNestedGenerator represents a generator nested within a combination-type generator (MatrixGenerator or
         * MergeGenerator).
         */
        V1alpha1ApplicationSetNestedGenerator[];
        mergeKeys?: string[];
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
    }
    /**
     * Operation contains information about a requested or running operation
     */
    export interface V1alpha1Operation {
        /**
         * Info is a list of informational items for this operation
         */
        info?: V1alpha1Info[];
        initiatedBy?: /* OperationInitiator contains information about the initiator of an operation */ V1alpha1OperationInitiator;
        retry?: /* RetryStrategy contains information about the strategy to apply when a sync failed */ V1alpha1RetryStrategy;
        sync?: /* SyncOperation contains details about a sync operation. */ V1alpha1SyncOperation;
    }
    /**
     * OperationInitiator contains information about the initiator of an operation
     */
    export interface V1alpha1OperationInitiator {
        /**
         * Automated is set to true if operation was initiated automatically by the application controller.
         */
        automated?: boolean;
        /**
         * Username contains the name of a user who started operation
         */
        username?: string;
    }
    /**
     * OperationState contains information about state of a running operation
     */
    export interface V1alpha1OperationState {
        finishedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Message holds any pertinent messages when attempting to perform operation (typically errors).
         */
        message?: string;
        operation?: /* Operation contains information about a requested or running operation */ V1alpha1Operation;
        /**
         * Phase is the current phase of the operation
         */
        phase?: string;
        /**
         * RetryCount contains time of operation retries
         */
        retryCount?: number; // int64
        startedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        syncResult?: /* SyncOperationResult represent result of sync operation */ V1alpha1SyncOperationResult;
    }
    /**
     * OrphanedResourceKey is a reference to a resource to be ignored from
     */
    export interface V1alpha1OrphanedResourceKey {
        group?: string;
        kind?: string;
        name?: string;
    }
    /**
     * OrphanedResourcesMonitorSettings holds settings of orphaned resources monitoring
     */
    export interface V1alpha1OrphanedResourcesMonitorSettings {
        /**
         * Ignore contains a list of resources that are to be excluded from orphaned resources monitoring
         */
        ignore?: /* OrphanedResourceKey is a reference to a resource to be ignored from */ V1alpha1OrphanedResourceKey[];
        /**
         * Warn indicates if warning condition should be created for apps which have orphaned resources
         */
        warn?: boolean;
    }
    /**
     * OverrideIgnoreDiff contains configurations about how fields should be ignored during diffs between
     * the desired state and live state
     */
    export interface V1alpha1OverrideIgnoreDiff {
        /**
         * JSONPointers is a JSON path list following the format defined in RFC4627 (https://datatracker.ietf.org/doc/html/rfc6902#section-3)
         */
        jSONPointers?: string[];
        /**
         * JQPathExpressions is a JQ path list that will be evaludated during the diff process
         */
        jqPathExpressions?: string[];
        /**
         * ManagedFieldsManagers is a list of trusted managers. Fields mutated by those managers will take precedence over the
         * desired state defined in the SCM and won't be displayed in diffs
         */
        managedFieldsManagers?: string[];
    }
    export interface V1alpha1PluginConfigMapRef {
        /**
         * Name of the ConfigMap
         */
        name?: string;
    }
    /**
     * PluginGenerator defines connection info specific to Plugin.
     */
    export interface V1alpha1PluginGenerator {
        configMapRef?: V1alpha1PluginConfigMapRef;
        input?: V1alpha1PluginInput;
        /**
         * RequeueAfterSeconds determines how long the ApplicationSet controller will wait before reconciling the ApplicationSet again.
         */
        requeueAfterSeconds?: number; // int64
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
        /**
         * Values contains key/value pairs which are passed directly as parameters to the template. These values will not be
         * sent as parameters to the plugin.
         */
        values?: {
            [name: string]: string;
        };
    }
    export interface V1alpha1PluginInput {
        /**
         * Parameters contains the information to pass to the plugin. It is a map. The keys must be strings, and the
         * values can be any type.
         */
        parameters?: {
            [name: string]: /**
             * JSON represents any valid JSON value.
             * These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
             */
            V1JSON;
        };
    }
    /**
     * ProjectRole represents a role that has access to a project
     */
    export interface V1alpha1ProjectRole {
        /**
         * Description is a description of the role
         */
        description?: string;
        /**
         * Groups are a list of OIDC group claims bound to this role
         */
        groups?: string[];
        /**
         * JWTTokens are a list of generated JWT tokens bound to this role
         */
        jwtTokens?: /* JWTToken holds the issuedAt and expiresAt values of a token */ V1alpha1JWTToken[];
        /**
         * Name is a name for this role
         */
        name?: string;
        /**
         * Policies Stores a list of casbin formatted strings that define access policies for the role in the project
         */
        policies?: string[];
    }
    /**
     * PullRequestGenerator defines a generator that scrapes a PullRequest API to find candidate pull requests.
     */
    export interface V1alpha1PullRequestGenerator {
        azuredevops?: /* PullRequestGeneratorAzureDevOps defines connection info specific to AzureDevOps. */ V1alpha1PullRequestGeneratorAzureDevOps;
        bitbucket?: /* PullRequestGeneratorBitbucket defines connection info specific to Bitbucket. */ V1alpha1PullRequestGeneratorBitbucket;
        bitbucketServer?: /* PullRequestGeneratorBitbucketServer defines connection info specific to BitbucketServer. */ V1alpha1PullRequestGeneratorBitbucketServer;
        /**
         * Filters for which pull requests should be considered.
         */
        filters?: /**
         * PullRequestGeneratorFilter is a single pull request filter.
         * If multiple filter types are set on a single struct, they will be AND'd together. All filters must
         * pass for a pull request to be included.
         */
        V1alpha1PullRequestGeneratorFilter[];
        gitea?: /* PullRequestGeneratorGitea defines connection info specific to Gitea. */ V1alpha1PullRequestGeneratorGitea;
        github?: /* PullRequestGenerator defines connection info specific to GitHub. */ V1alpha1PullRequestGeneratorGithub;
        gitlab?: /* PullRequestGeneratorGitLab defines connection info specific to GitLab. */ V1alpha1PullRequestGeneratorGitLab;
        /**
         * Standard parameters.
         */
        requeueAfterSeconds?: number; // int64
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
    }
    /**
     * PullRequestGeneratorAzureDevOps defines connection info specific to AzureDevOps.
     */
    export interface V1alpha1PullRequestGeneratorAzureDevOps {
        /**
         * The Azure DevOps API URL to talk to. If blank, use https://dev.azure.com/.
         */
        api?: string;
        /**
         * Labels is used to filter the PRs that you want to target
         */
        labels?: string[];
        /**
         * Azure DevOps org to scan. Required.
         */
        organization?: string;
        /**
         * Azure DevOps project name to scan. Required.
         */
        project?: string;
        /**
         * Azure DevOps repo name to scan. Required.
         */
        repo?: string;
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
    }
    /**
     * PullRequestGeneratorBitbucket defines connection info specific to Bitbucket.
     */
    export interface V1alpha1PullRequestGeneratorBitbucket {
        /**
         * The Bitbucket REST API URL to talk to. If blank, uses https://api.bitbucket.org/2.0.
         */
        api?: string;
        basicAuth?: /* BasicAuthBitbucketServer defines the username/(password or personal access token) for Basic auth. */ V1alpha1BasicAuthBitbucketServer;
        bearerToken?: /* BearerTokenBitbucketCloud defines the Bearer token for BitBucket AppToken auth. */ V1alpha1BearerTokenBitbucketCloud;
        /**
         * Workspace to scan. Required.
         */
        owner?: string;
        /**
         * Repo name to scan. Required.
         */
        repo?: string;
    }
    /**
     * PullRequestGeneratorBitbucketServer defines connection info specific to BitbucketServer.
     */
    export interface V1alpha1PullRequestGeneratorBitbucketServer {
        /**
         * The Bitbucket REST API URL to talk to e.g. https://bitbucket.org/rest Required.
         */
        api?: string;
        basicAuth?: /* BasicAuthBitbucketServer defines the username/(password or personal access token) for Basic auth. */ V1alpha1BasicAuthBitbucketServer;
        bearerToken?: /* BearerTokenBitbucket defines the Bearer token for BitBucket AppToken auth. */ V1alpha1BearerTokenBitbucket;
        caRef?: /* Utility struct for a reference to a configmap key. */ V1alpha1ConfigMapKeyRef;
        /**
         * Allow self-signed TLS / Certificates; default: false
         */
        insecure?: boolean;
        /**
         * Project to scan. Required.
         */
        project?: string;
        /**
         * Repo name to scan. Required.
         */
        repo?: string;
    }
    /**
     * PullRequestGeneratorFilter is a single pull request filter.
     * If multiple filter types are set on a single struct, they will be AND'd together. All filters must
     * pass for a pull request to be included.
     */
    export interface V1alpha1PullRequestGeneratorFilter {
        branchMatch?: string;
        targetBranchMatch?: string;
    }
    /**
     * PullRequestGeneratorGitLab defines connection info specific to GitLab.
     */
    export interface V1alpha1PullRequestGeneratorGitLab {
        /**
         * The GitLab API URL to talk to. If blank, uses https://gitlab.com/.
         */
        api?: string;
        caRef?: /* Utility struct for a reference to a configmap key. */ V1alpha1ConfigMapKeyRef;
        /**
         * Skips validating the SCM provider's TLS certificate - useful for self-signed certificates.; default: false
         */
        insecure?: boolean;
        /**
         * Labels is used to filter the MRs that you want to target
         */
        labels?: string[];
        /**
         * GitLab project to scan. Required.
         */
        project?: string;
        /**
         * PullRequestState is an additional MRs filter to get only those with a certain state. Default: "" (all states)
         */
        pullRequestState?: string;
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
    }
    /**
     * PullRequestGeneratorGitea defines connection info specific to Gitea.
     */
    export interface V1alpha1PullRequestGeneratorGitea {
        /**
         * The Gitea API URL to talk to. Required
         */
        api?: string;
        /**
         * Allow insecure tls, for self-signed certificates; default: false.
         */
        insecure?: boolean;
        /**
         * Gitea org or user to scan. Required.
         */
        owner?: string;
        /**
         * Gitea repo name to scan. Required.
         */
        repo?: string;
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
    }
    /**
     * PullRequestGenerator defines connection info specific to GitHub.
     */
    export interface V1alpha1PullRequestGeneratorGithub {
        /**
         * The GitHub API URL to talk to. If blank, use https://api.github.com/.
         */
        api?: string;
        /**
         * AppSecretName is a reference to a GitHub App repo-creds secret with permission to access pull requests.
         */
        appSecretName?: string;
        /**
         * Labels is used to filter the PRs that you want to target
         */
        labels?: string[];
        /**
         * GitHub org or user to scan. Required.
         */
        owner?: string;
        /**
         * GitHub repo name to scan. Required.
         */
        repo?: string;
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
    }
    /**
     * RepoCreds holds the definition for repository credentials
     */
    export interface V1alpha1RepoCreds {
        /**
         * EnableOCI specifies whether helm-oci support should be enabled for this repo
         */
        enableOCI?: boolean;
        /**
         * ForceHttpBasicAuth specifies whether Argo CD should attempt to force basic auth for HTTP connections
         */
        forceHttpBasicAuth?: boolean;
        /**
         * GCPServiceAccountKey specifies the service account key in JSON format to be used for getting credentials to Google Cloud Source repos
         */
        gcpServiceAccountKey?: string;
        /**
         * GithubAppEnterpriseBaseURL specifies the GitHub API URL for GitHub app authentication. If empty will default to https://api.github.com
         */
        githubAppEnterpriseBaseUrl?: string;
        /**
         * GithubAppId specifies the Github App ID of the app used to access the repo for GitHub app authentication
         */
        githubAppID?: number; // int64
        /**
         * GithubAppInstallationId specifies the ID of the installed GitHub App for GitHub app authentication
         */
        githubAppInstallationID?: number; // int64
        /**
         * GithubAppPrivateKey specifies the private key PEM data for authentication via GitHub app
         */
        githubAppPrivateKey?: string;
        /**
         * NoProxy specifies a list of targets where the proxy isn't used, applies only in cases where the proxy is applied
         */
        noProxy?: string;
        /**
         * Password for authenticating at the repo server
         */
        password?: string;
        /**
         * Proxy specifies the HTTP/HTTPS proxy used to access repos at the repo server
         */
        proxy?: string;
        /**
         * SSHPrivateKey contains the private key data for authenticating at the repo server using SSH (only Git repos)
         */
        sshPrivateKey?: string;
        /**
         * TLSClientCertData specifies the TLS client cert data for authenticating at the repo server
         */
        tlsClientCertData?: string;
        /**
         * TLSClientCertKey specifies the TLS client cert key for authenticating at the repo server
         */
        tlsClientCertKey?: string;
        /**
         * Type specifies the type of the repoCreds. Can be either "git" or "helm. "git" is assumed if empty or absent.
         */
        type?: string;
        /**
         * URL is the URL to which these credentials match
         */
        url?: string;
        /**
         * Username for authenticating at the repo server
         */
        username?: string;
    }
    /**
     * RepositoryList is a collection of Repositories.
     */
    export interface V1alpha1RepoCredsList {
        items?: /* RepoCreds holds the definition for repository credentials */ V1alpha1RepoCreds[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
    }
    /**
     * Repository is a repository holding application configurations
     */
    export interface V1alpha1Repository {
        connectionState?: /* ConnectionState contains information about remote resource connection state, currently used for clusters and repositories */ V1alpha1ConnectionState;
        /**
         * EnableLFS specifies whether git-lfs support should be enabled for this repo. Only valid for Git repositories.
         */
        enableLfs?: boolean;
        /**
         * EnableOCI specifies whether helm-oci support should be enabled for this repo
         */
        enableOCI?: boolean;
        /**
         * ForceHttpBasicAuth specifies whether Argo CD should attempt to force basic auth for HTTP connections
         */
        forceHttpBasicAuth?: boolean;
        /**
         * GCPServiceAccountKey specifies the service account key in JSON format to be used for getting credentials to Google Cloud Source repos
         */
        gcpServiceAccountKey?: string;
        /**
         * GithubAppEnterpriseBaseURL specifies the base URL of GitHub Enterprise installation. If empty will default to https://api.github.com
         */
        githubAppEnterpriseBaseUrl?: string;
        /**
         * GithubAppId specifies the ID of the GitHub app used to access the repo
         */
        githubAppID?: number; // int64
        /**
         * GithubAppInstallationId specifies the installation ID of the GitHub App used to access the repo
         */
        githubAppInstallationID?: number; // int64
        /**
         * Github App Private Key PEM data
         */
        githubAppPrivateKey?: string;
        /**
         * Whether credentials were inherited from a credential set
         */
        inheritedCreds?: boolean;
        /**
         * Insecure specifies whether the connection to the repository ignores any errors when verifying TLS certificates or SSH host keys
         */
        insecure?: boolean;
        /**
         * InsecureIgnoreHostKey should not be used anymore, Insecure is favoured
         * Used only for Git repos
         */
        insecureIgnoreHostKey?: boolean;
        /**
         * Name specifies a name to be used for this repo. Only used with Helm repos
         */
        name?: string;
        /**
         * NoProxy specifies a list of targets where the proxy isn't used, applies only in cases where the proxy is applied
         */
        noProxy?: string;
        /**
         * Password contains the password or PAT used for authenticating at the remote repository
         */
        password?: string;
        /**
         * Reference between project and repository that allows it to be automatically added as an item inside SourceRepos project entity
         */
        project?: string;
        /**
         * Proxy specifies the HTTP/HTTPS proxy used to access the repo
         */
        proxy?: string;
        /**
         * Repo contains the URL to the remote repository
         */
        repo?: string;
        /**
         * SSHPrivateKey contains the PEM data for authenticating at the repo server. Only used with Git repos.
         */
        sshPrivateKey?: string;
        /**
         * TLSClientCertData contains a certificate in PEM format for authenticating at the repo server
         */
        tlsClientCertData?: string;
        /**
         * TLSClientCertKey contains a private key in PEM format for authenticating at the repo server
         */
        tlsClientCertKey?: string;
        /**
         * Type specifies the type of the repo. Can be either "git" or "helm. "git" is assumed if empty or absent.
         */
        type?: string;
        /**
         * Username contains the user name used for authenticating at the remote repository
         */
        username?: string;
    }
    /**
     * A RepositoryCertificate is either SSH known hosts entry or TLS certificate
     */
    export interface V1alpha1RepositoryCertificate {
        /**
         * CertData contains the actual certificate data, dependent on the certificate type
         */
        certData?: string; // byte
        /**
         * CertInfo will hold additional certificate info, depdendent on the certificate type (e.g. SSH fingerprint, X509 CommonName)
         */
        certInfo?: string;
        /**
         * CertSubType specifies the sub type of the cert, i.e. "ssh-rsa"
         */
        certSubType?: string;
        /**
         * CertType specifies the type of the certificate - currently one of "https" or "ssh"
         */
        certType?: string;
        /**
         * ServerName specifies the DNS name of the server this certificate is intended for
         */
        serverName?: string;
    }
    /**
     * RepositoryCertificateList is a collection of RepositoryCertificates
     */
    export interface V1alpha1RepositoryCertificateList {
        /**
         * List of certificates to be processed
         */
        items?: /* A RepositoryCertificate is either SSH known hosts entry or TLS certificate */ V1alpha1RepositoryCertificate[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
    }
    /**
     * RepositoryList is a collection of Repositories.
     */
    export interface V1alpha1RepositoryList {
        items?: /* Repository is a repository holding application configurations */ V1alpha1Repository[];
        metadata?: /**
         * ListMeta describes metadata that synthetic resources must have, including lists and
         * various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        V1ListMeta;
    }
    /**
     * TODO: describe this type
     * TODO: describe members of this type
     */
    export interface V1alpha1ResourceAction {
        disabled?: boolean;
        displayName?: string;
        iconClass?: string;
        name?: string;
        params?: /**
         * TODO: describe this type
         * TODO: describe members of this type
         */
        V1alpha1ResourceActionParam[];
    }
    /**
     * TODO: describe this type
     * TODO: describe members of this type
     */
    export interface V1alpha1ResourceActionParam {
        default?: string;
        name?: string;
        type?: string;
        value?: string;
    }
    /**
     * ResourceDiff holds the diff of a live and target resource object
     * TODO: describe members of this type
     */
    export interface V1alpha1ResourceDiff {
        /**
         * Diff contains the JSON patch between target and live resource
         * Deprecated: use NormalizedLiveState and PredictedLiveState to render the difference
         */
        diff?: string;
        group?: string;
        hook?: boolean;
        kind?: string;
        /**
         * TargetState contains the JSON live resource manifest
         */
        liveState?: string;
        modified?: boolean;
        name?: string;
        namespace?: string;
        /**
         * NormalizedLiveState contains JSON serialized live resource state with applied normalizations
         */
        normalizedLiveState?: string;
        /**
         * PredictedLiveState contains JSON serialized resource state that is calculated based on normalized and target resource state
         */
        predictedLiveState?: string;
        resourceVersion?: string;
        /**
         * TargetState contains the JSON serialized resource manifest defined in the Git/Helm
         */
        targetState?: string;
    }
    /**
     * ResourceIgnoreDifferences contains resource filter and list of json paths which should be ignored during comparison with live state.
     */
    export interface V1alpha1ResourceIgnoreDifferences {
        group?: string;
        jqPathExpressions?: string[];
        jsonPointers?: string[];
        kind?: string;
        /**
         * ManagedFieldsManagers is a list of trusted managers. Fields mutated by those managers will take precedence over the
         * desired state defined in the SCM and won't be displayed in diffs
         */
        managedFieldsManagers?: string[];
        name?: string;
        namespace?: string;
    }
    /**
     * ResourceMatcher holds the filter for the resource
     */
    export interface V1alpha1ResourceMatcher {
        group?: string;
        kind?: string;
        name?: string;
        namespace?: string;
    }
    /**
     * ResourceNetworkingInfo holds networking resource related information
     * TODO: describe members of this type
     */
    export interface V1alpha1ResourceNetworkingInfo {
        /**
         * ExternalURLs holds list of URLs which should be available externally. List is populated for ingress resources using rules hostnames.
         */
        externalURLs?: string[];
        ingress?: /**
         * LoadBalancerIngress represents the status of a load-balancer ingress point:
         * traffic intended for the service should be sent to an ingress point.
         */
        V1LoadBalancerIngress[];
        labels?: {
            [name: string]: string;
        };
        targetLabels?: {
            [name: string]: string;
        };
        targetRefs?: /* ResourceRef includes fields which uniquely identify a resource */ V1alpha1ResourceRef[];
    }
    /**
     * ResourceNode contains information about live resource and its children
     * TODO: describe members of this type
     */
    export interface V1alpha1ResourceNode {
        group?: string;
        kind?: string;
        name?: string;
        namespace?: string;
        uid?: string;
        version?: string;
        createdAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        health?: /* HealthStatus contains information about the currently observed health state of an application or resource */ V1alpha1HealthStatus;
        images?: string[];
        info?: /* InfoItem contains arbitrary, human readable information about an application */ V1alpha1InfoItem[];
        networkingInfo?: /**
         * ResourceNetworkingInfo holds networking resource related information
         * TODO: describe members of this type
         */
        V1alpha1ResourceNetworkingInfo;
        parentRefs?: /* ResourceRef includes fields which uniquely identify a resource */ V1alpha1ResourceRef[];
        resourceVersion?: string;
    }
    /**
     * ResourceOverride holds configuration to customize resource diffing and health assessment
     * TODO: describe the members of this type
     */
    export interface V1alpha1ResourceOverride {
        actions?: string;
        healthLua?: string;
        ignoreDifferences?: /**
         * OverrideIgnoreDiff contains configurations about how fields should be ignored during diffs between
         * the desired state and live state
         */
        V1alpha1OverrideIgnoreDiff;
        ignoreResourceUpdates?: /**
         * OverrideIgnoreDiff contains configurations about how fields should be ignored during diffs between
         * the desired state and live state
         */
        V1alpha1OverrideIgnoreDiff;
        knownTypeFields?: /**
         * KnownTypeField contains mapping between CRD field and known Kubernetes type.
         * This is mainly used for unit conversion in unknown resources (e.g. 0.1 == 100mi)
         * TODO: Describe the members of this type
         */
        V1alpha1KnownTypeField[];
        useOpenLibs?: boolean;
    }
    /**
     * ResourceRef includes fields which uniquely identify a resource
     */
    export interface V1alpha1ResourceRef {
        group?: string;
        kind?: string;
        name?: string;
        namespace?: string;
        uid?: string;
        version?: string;
    }
    /**
     * ResourceResult holds the operation result details of a specific resource
     */
    export interface V1alpha1ResourceResult {
        /**
         * Group specifies the API group of the resource
         */
        group?: string;
        /**
         * HookPhase contains the state of any operation associated with this resource OR hook
         * This can also contain values for non-hook resources.
         */
        hookPhase?: string;
        /**
         * HookType specifies the type of the hook. Empty for non-hook resources
         */
        hookType?: string;
        /**
         * Kind specifies the API kind of the resource
         */
        kind?: string;
        /**
         * Message contains an informational or error message for the last sync OR operation
         */
        message?: string;
        /**
         * Name specifies the name of the resource
         */
        name?: string;
        /**
         * Namespace specifies the target namespace of the resource
         */
        namespace?: string;
        /**
         * Status holds the final result of the sync. Will be empty if the resources is yet to be applied/pruned and is always zero-value for hooks
         */
        status?: string;
        /**
         * SyncPhase indicates the particular phase of the sync that this result was acquired in
         */
        syncPhase?: string;
        /**
         * Version specifies the API version of the resource
         */
        version?: string;
    }
    /**
     * RetryStrategy contains information about the strategy to apply when a sync failed
     */
    export interface V1alpha1RetryStrategy {
        backoff?: /* Backoff is the backoff strategy to use on subsequent retries for failing syncs */ V1alpha1Backoff;
        /**
         * Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
         */
        limit?: number; // int64
    }
    /**
     * RevisionHistory contains history information about a previous sync
     */
    export interface V1alpha1RevisionHistory {
        deployStartedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        deployedAt?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * ID is an auto incrementing identifier of the RevisionHistory
         */
        id?: number; // int64
        initiatedBy?: /* OperationInitiator contains information about the initiator of an operation */ V1alpha1OperationInitiator;
        /**
         * Revision holds the revision the sync was performed against
         */
        revision?: string;
        /**
         * Revisions holds the revision of each source in sources field the sync was performed against
         */
        revisions?: string[];
        source?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource;
        /**
         * Sources is a reference to the application sources used for the sync operation
         */
        sources?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource[];
    }
    /**
     * RevisionMetadata contains metadata for a specific revision in a Git repository
     */
    export interface V1alpha1RevisionMetadata {
        /**
         * who authored this revision,
         * typically their name and email, e.g. "John Doe <john_doe@my-company.com>",
         * but might not match this example
         */
        author?: string;
        date?: /**
         * Time is a wrapper around time.Time which supports correct
         * marshaling to YAML and JSON.  Wrappers are provided for many
         * of the factory methods that the time package offers.
         *
         * +protobuf.options.marshal=false
         * +protobuf.as=Timestamp
         * +protobuf.options.(gogoproto.goproto_stringer)=false
         */
        V1Time /* date-time */;
        /**
         * Message contains the message associated with the revision, most likely the commit message.
         */
        message?: string;
        /**
         * SignatureInfo contains a hint on the signer if the revision was signed with GPG, and signature verification is enabled.
         */
        signatureInfo?: string;
        /**
         * Tags specifies any tags currently attached to the revision
         * Floating tags can move from one revision to another
         */
        tags?: string[];
    }
    /**
     * SCMProviderGenerator defines a generator that scrapes a SCMaaS API to find candidate repos.
     */
    export interface V1alpha1SCMProviderGenerator {
        awsCodeCommit?: /* SCMProviderGeneratorAWSCodeCommit defines connection info specific to AWS CodeCommit. */ V1alpha1SCMProviderGeneratorAWSCodeCommit;
        azureDevOps?: /* SCMProviderGeneratorAzureDevOps defines connection info specific to Azure DevOps. */ V1alpha1SCMProviderGeneratorAzureDevOps;
        bitbucket?: /* SCMProviderGeneratorBitbucket defines connection info specific to Bitbucket Cloud (API version 2). */ V1alpha1SCMProviderGeneratorBitbucket;
        bitbucketServer?: /* SCMProviderGeneratorBitbucketServer defines connection info specific to Bitbucket Server. */ V1alpha1SCMProviderGeneratorBitbucketServer;
        /**
         * Which protocol to use for the SCM URL. Default is provider-specific but ssh if possible. Not all providers
         * necessarily support all protocols.
         */
        cloneProtocol?: string;
        /**
         * Filters for which repos should be considered.
         */
        filters?: /**
         * SCMProviderGeneratorFilter is a single repository filter.
         * If multiple filter types are set on a single struct, they will be AND'd together. All filters must
         * pass for a repo to be included.
         */
        V1alpha1SCMProviderGeneratorFilter[];
        gitea?: /* SCMProviderGeneratorGitea defines a connection info specific to Gitea. */ V1alpha1SCMProviderGeneratorGitea;
        github?: /* SCMProviderGeneratorGithub defines connection info specific to GitHub. */ V1alpha1SCMProviderGeneratorGithub;
        gitlab?: /* SCMProviderGeneratorGitlab defines connection info specific to Gitlab. */ V1alpha1SCMProviderGeneratorGitlab;
        /**
         * Standard parameters.
         */
        requeueAfterSeconds?: number; // int64
        template?: /* ApplicationSetTemplate represents argocd ApplicationSpec */ V1alpha1ApplicationSetTemplate;
        /**
         * Values contains key/value pairs which are passed directly as parameters to the template
         */
        values?: {
            [name: string]: string;
        };
    }
    /**
     * SCMProviderGeneratorAWSCodeCommit defines connection info specific to AWS CodeCommit.
     */
    export interface V1alpha1SCMProviderGeneratorAWSCodeCommit {
        /**
         * Scan all branches instead of just the default branch.
         */
        allBranches?: boolean;
        /**
         * Region provides the AWS region to discover repos.
         * if not provided, AppSet controller will infer the current region from environment.
         */
        region?: string;
        /**
         * Role provides the AWS IAM role to assume, for cross-account repo discovery
         * if not provided, AppSet controller will use its pod/node identity to discover.
         */
        role?: string;
        /**
         * TagFilters provides the tag filter(s) for repo discovery
         */
        tagFilters?: V1alpha1TagFilter[];
    }
    /**
     * SCMProviderGeneratorAzureDevOps defines connection info specific to Azure DevOps.
     */
    export interface V1alpha1SCMProviderGeneratorAzureDevOps {
        accessTokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
        /**
         * Scan all branches instead of just the default branch.
         */
        allBranches?: boolean;
        /**
         * The URL to Azure DevOps. If blank, use https://dev.azure.com.
         */
        api?: string;
        /**
         * Azure Devops organization. Required. E.g. "my-organization".
         */
        organization?: string;
        /**
         * Azure Devops team project. Required. E.g. "my-team".
         */
        teamProject?: string;
    }
    /**
     * SCMProviderGeneratorBitbucket defines connection info specific to Bitbucket Cloud (API version 2).
     */
    export interface V1alpha1SCMProviderGeneratorBitbucket {
        /**
         * Scan all branches instead of just the main branch.
         */
        allBranches?: boolean;
        appPasswordRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
        /**
         * Bitbucket workspace to scan. Required.
         */
        owner?: string;
        /**
         * Bitbucket user to use when authenticating.  Should have a "member" role to be able to read all repositories and branches.  Required
         */
        user?: string;
    }
    /**
     * SCMProviderGeneratorBitbucketServer defines connection info specific to Bitbucket Server.
     */
    export interface V1alpha1SCMProviderGeneratorBitbucketServer {
        /**
         * Scan all branches instead of just the default branch.
         */
        allBranches?: boolean;
        /**
         * The Bitbucket Server REST API URL to talk to. Required.
         */
        api?: string;
        basicAuth?: /* BasicAuthBitbucketServer defines the username/(password or personal access token) for Basic auth. */ V1alpha1BasicAuthBitbucketServer;
        bearerToken?: /* BearerTokenBitbucket defines the Bearer token for BitBucket AppToken auth. */ V1alpha1BearerTokenBitbucket;
        caRef?: /* Utility struct for a reference to a configmap key. */ V1alpha1ConfigMapKeyRef;
        /**
         * Allow self-signed TLS / Certificates; default: false
         */
        insecure?: boolean;
        /**
         * Project to scan. Required.
         */
        project?: string;
    }
    /**
     * SCMProviderGeneratorFilter is a single repository filter.
     * If multiple filter types are set on a single struct, they will be AND'd together. All filters must
     * pass for a repo to be included.
     */
    export interface V1alpha1SCMProviderGeneratorFilter {
        /**
         * A regex which must match the branch name.
         */
        branchMatch?: string;
        /**
         * A regex which must match at least one label.
         */
        labelMatch?: string;
        /**
         * An array of paths, all of which must not exist.
         */
        pathsDoNotExist?: string[];
        /**
         * An array of paths, all of which must exist.
         */
        pathsExist?: string[];
        /**
         * A regex for repo names.
         */
        repositoryMatch?: string;
    }
    /**
     * SCMProviderGeneratorGitea defines a connection info specific to Gitea.
     */
    export interface V1alpha1SCMProviderGeneratorGitea {
        /**
         * Scan all branches instead of just the default branch.
         */
        allBranches?: boolean;
        /**
         * The Gitea URL to talk to. For example https://gitea.mydomain.com/.
         */
        api?: string;
        /**
         * Allow self-signed TLS / Certificates; default: false
         */
        insecure?: boolean;
        /**
         * Gitea organization or user to scan. Required.
         */
        owner?: string;
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
    }
    /**
     * SCMProviderGeneratorGithub defines connection info specific to GitHub.
     */
    export interface V1alpha1SCMProviderGeneratorGithub {
        /**
         * Scan all branches instead of just the default branch.
         */
        allBranches?: boolean;
        /**
         * The GitHub API URL to talk to. If blank, use https://api.github.com/.
         */
        api?: string;
        /**
         * AppSecretName is a reference to a GitHub App repo-creds secret.
         */
        appSecretName?: string;
        /**
         * GitHub org to scan. Required.
         */
        organization?: string;
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
    }
    /**
     * SCMProviderGeneratorGitlab defines connection info specific to Gitlab.
     */
    export interface V1alpha1SCMProviderGeneratorGitlab {
        /**
         * Scan all branches instead of just the default branch.
         */
        allBranches?: boolean;
        /**
         * The Gitlab API URL to talk to.
         */
        api?: string;
        caRef?: /* Utility struct for a reference to a configmap key. */ V1alpha1ConfigMapKeyRef;
        /**
         * Gitlab group to scan. Required.  You can use either the project id (recommended) or the full namespaced path.
         */
        group?: string;
        /**
         * When recursing through subgroups, also include shared Projects (true) or scan only the subgroups under same path (false).  Defaults to "true"
         */
        includeSharedProjects?: boolean;
        /**
         * Recurse through subgroups (true) or scan only the base group (false).  Defaults to "false"
         */
        includeSubgroups?: boolean;
        /**
         * Skips validating the SCM provider's TLS certificate - useful for self-signed certificates.; default: false
         */
        insecure?: boolean;
        tokenRef?: /* Utility struct for a reference to a secret key. */ V1alpha1SecretRef;
        /**
         * Filter repos list based on Gitlab Topic.
         */
        topic?: string;
    }
    /**
     * Utility struct for a reference to a secret key.
     */
    export interface V1alpha1SecretRef {
        key?: string;
        secretName?: string;
    }
    /**
     * SignatureKey is the specification of a key required to verify commit signatures with
     */
    export interface V1alpha1SignatureKey {
        /**
         * The ID of the key in hexadecimal notation
         */
        keyID?: string;
    }
    /**
     * SourceHydrator specifies a dry "don't repeat yourself" source for manifests, a sync source from which to sync
     * hydrated manifests, and an optional hydrateTo location to act as a "staging" aread for hydrated manifests.
     */
    export interface V1alpha1SourceHydrator {
        drySource?: /* DrySource specifies a location for dry "don't repeat yourself" manifest source information. */ V1alpha1DrySource;
        hydrateTo?: /**
         * HydrateTo specifies a location to which hydrated manifests should be pushed as a "staging area" before being moved to
         * the SyncSource. The RepoURL and Path are assumed based on the associated SyncSource config in the SourceHydrator.
         */
        V1alpha1HydrateTo;
        syncSource?: /**
         * SyncSource specifies a location from which hydrated manifests may be synced. RepoURL is assumed based on the
         * associated DrySource config in the SourceHydrator.
         */
        V1alpha1SyncSource;
    }
    /**
     * SourceHydratorStatus contains information about the current state of source hydration
     */
    export interface V1alpha1SourceHydratorStatus {
        currentOperation?: /* HydrateOperation contains information about the most recent hydrate operation */ V1alpha1HydrateOperation;
        lastSuccessfulOperation?: /* SuccessfulHydrateOperation contains information about the most recent successful hydrate operation */ V1alpha1SuccessfulHydrateOperation;
    }
    /**
     * SuccessfulHydrateOperation contains information about the most recent successful hydrate operation
     */
    export interface V1alpha1SuccessfulHydrateOperation {
        /**
         * DrySHA holds the resolved revision (sha) of the dry source as of the most recent reconciliation
         */
        drySHA?: string;
        /**
         * HydratedSHA holds the resolved revision (sha) of the hydrated source as of the most recent reconciliation
         */
        hydratedSHA?: string;
        sourceHydrator?: /**
         * SourceHydrator specifies a dry "don't repeat yourself" source for manifests, a sync source from which to sync
         * hydrated manifests, and an optional hydrateTo location to act as a "staging" aread for hydrated manifests.
         */
        V1alpha1SourceHydrator;
    }
    /**
     * SyncOperation contains details about a sync operation.
     */
    export interface V1alpha1SyncOperation {
        /**
         * SelfHealAttemptsCount contains the number of auto-heal attempts
         */
        autoHealAttemptsCount?: number; // int64
        /**
         * DryRun specifies to perform a `kubectl apply --dry-run` without actually performing the sync
         */
        dryRun?: boolean;
        /**
         * Manifests is an optional field that overrides sync source with a local directory for development
         */
        manifests?: string[];
        /**
         * Prune specifies to delete resources from the cluster that are no longer tracked in git
         */
        prune?: boolean;
        /**
         * Resources describes which resources shall be part of the sync
         */
        resources?: /* SyncOperationResource contains resources to sync. */ V1alpha1SyncOperationResource[];
        /**
         * Revision is the revision (Git) or chart version (Helm) which to sync the application to
         * If omitted, will use the revision specified in app spec.
         */
        revision?: string;
        /**
         * Revisions is the list of revision (Git) or chart version (Helm) which to sync each source in sources field for the application to
         * If omitted, will use the revision specified in app spec.
         */
        revisions?: string[];
        source?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource;
        /**
         * Sources overrides the source definition set in the application.
         * This is typically set in a Rollback operation and is nil during a Sync operation
         */
        sources?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource[];
        /**
         * SyncOptions provide per-sync sync-options, e.g. Validate=false
         */
        syncOptions?: string[];
        syncStrategy?: /* SyncStrategy controls the manner in which a sync is performed */ V1alpha1SyncStrategy;
    }
    /**
     * SyncOperationResource contains resources to sync.
     */
    export interface V1alpha1SyncOperationResource {
        group?: string;
        kind?: string;
        name?: string;
        namespace?: string;
    }
    /**
     * SyncOperationResult represent result of sync operation
     */
    export interface V1alpha1SyncOperationResult {
        managedNamespaceMetadata?: V1alpha1ManagedNamespaceMetadata;
        /**
         * Resources contains a list of sync result items for each individual resource in a sync operation
         */
        resources?: /* ResourceResult holds the operation result details of a specific resource */ V1alpha1ResourceResult[];
        /**
         * Revision holds the revision this sync operation was performed to
         */
        revision?: string;
        /**
         * Revisions holds the revision this sync operation was performed for respective indexed source in sources field
         */
        revisions?: string[];
        source?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource;
        /**
         * Source records the application source information of the sync, used for comparing auto-sync
         */
        sources?: /* ApplicationSource contains all required information about the source of an application */ V1alpha1ApplicationSource[];
    }
    /**
     * SyncPolicy controls when a sync will be performed in response to updates in git
     */
    export interface V1alpha1SyncPolicy {
        automated?: /* SyncPolicyAutomated controls the behavior of an automated sync */ V1alpha1SyncPolicyAutomated;
        managedNamespaceMetadata?: V1alpha1ManagedNamespaceMetadata;
        retry?: /* RetryStrategy contains information about the strategy to apply when a sync failed */ V1alpha1RetryStrategy;
        /**
         * Options allow you to specify whole app sync-options
         */
        syncOptions?: string[];
    }
    /**
     * SyncPolicyAutomated controls the behavior of an automated sync
     */
    export interface V1alpha1SyncPolicyAutomated {
        /**
         * AllowEmpty allows apps have zero live resources (default: false)
         */
        allowEmpty?: boolean;
        /**
         * Prune specifies whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync (default: false)
         */
        prune?: boolean;
        /**
         * SelfHeal specifies whether to revert resources back to their desired state upon modification in the cluster (default: false)
         */
        selfHeal?: boolean;
    }
    /**
     * SyncSource specifies a location from which hydrated manifests may be synced. RepoURL is assumed based on the
     * associated DrySource config in the SourceHydrator.
     */
    export interface V1alpha1SyncSource {
        /**
         * Path is a directory path within the git repository where hydrated manifests should be committed to and synced
         * from. If hydrateTo is set, this is just the path from which hydrated manifests will be synced.
         */
        path?: string;
        /**
         * TargetBranch is the branch to which hydrated manifests should be committed
         */
        targetBranch?: string;
    }
    /**
     * SyncStatus contains information about the currently observed live and desired states of an application
     */
    export interface V1alpha1SyncStatus {
        comparedTo?: /* ComparedTo contains application source and target which was used for resources comparison */ V1alpha1ComparedTo;
        /**
         * Revision contains information about the revision the comparison has been performed to
         */
        revision?: string;
        /**
         * Revisions contains information about the revisions of multiple sources the comparison has been performed to
         */
        revisions?: string[];
        /**
         * Status is the sync state of the comparison
         */
        status?: string;
    }
    /**
     * SyncStrategy controls the manner in which a sync is performed
     */
    export interface V1alpha1SyncStrategy {
        apply?: /* SyncStrategyApply uses `kubectl apply` to perform the apply */ V1alpha1SyncStrategyApply;
        hook?: /**
         * SyncStrategyHook will perform a sync using hooks annotations.
         * If no hook annotation is specified falls back to `kubectl apply`.
         */
        V1alpha1SyncStrategyHook;
    }
    /**
     * SyncStrategyApply uses `kubectl apply` to perform the apply
     */
    export interface V1alpha1SyncStrategyApply {
        /**
         * Force indicates whether or not to supply the --force flag to `kubectl apply`.
         * The --force flag deletes and re-create the resource, when PATCH encounters conflict and has
         * retried for 5 times.
         */
        force?: boolean;
    }
    /**
     * SyncStrategyHook will perform a sync using hooks annotations.
     * If no hook annotation is specified falls back to `kubectl apply`.
     */
    export interface V1alpha1SyncStrategyHook {
        syncStrategyApply?: /* SyncStrategyApply uses `kubectl apply` to perform the apply */ V1alpha1SyncStrategyApply;
    }
    /**
     * SyncWindow contains the kind, time, duration and attributes that are used to assign the syncWindows to apps
     */
    export interface V1alpha1SyncWindow {
        /**
         * Applications contains a list of applications that the window will apply to
         */
        applications?: string[];
        /**
         * Clusters contains a list of clusters that the window will apply to
         */
        clusters?: string[];
        /**
         * Duration is the amount of time the sync window will be open
         */
        duration?: string;
        /**
         * Kind defines if the window allows or blocks syncs
         */
        kind?: string;
        /**
         * ManualSync enables manual syncs when they would otherwise be blocked
         */
        manualSync?: boolean;
        /**
         * Namespaces contains a list of namespaces that the window will apply to
         */
        namespaces?: string[];
        /**
         * Schedule is the time the window will begin, specified in cron format
         */
        schedule?: string;
        /**
         * TimeZone of the sync that will be applied to the schedule
         */
        timeZone?: string;
    }
    /**
     * TLSClientConfig contains settings to enable transport layer security
     */
    export interface V1alpha1TLSClientConfig {
        /**
         * CAData holds PEM-encoded bytes (typically read from a root certificates bundle).
         * CAData takes precedence over CAFile
         */
        caData?: string; // byte
        /**
         * CertData holds PEM-encoded bytes (typically read from a client certificate file).
         * CertData takes precedence over CertFile
         */
        certData?: string; // byte
        /**
         * Insecure specifies that the server should be accessed without verifying the TLS certificate. For testing only.
         */
        insecure?: boolean;
        /**
         * KeyData holds PEM-encoded bytes (typically read from a client certificate key file).
         * KeyData takes precedence over KeyFile
         */
        keyData?: string; // byte
        /**
         * ServerName is passed to the server for SNI and is used in the client to check server
         * certificates against. If ServerName is empty, the hostname used to contact the
         * server is used.
         */
        serverName?: string;
    }
    export interface V1alpha1TagFilter {
        key?: string;
        value?: string;
    }
    /**
     * VersionMessage represents version of the Argo CD API server
     */
    export interface VersionVersionMessage {
        BuildDate?: string;
        Compiler?: string;
        ExtraBuildInfo?: string;
        GitCommit?: string;
        GitTag?: string;
        GitTreeState?: string;
        GoVersion?: string;
        HelmVersion?: string;
        JsonnetVersion?: string;
        KubectlVersion?: string;
        KustomizeVersion?: string;
        Platform?: string;
        Version?: string;
    }
}
declare namespace Paths {
    namespace AccountServiceCanI {
        namespace Parameters {
            export type Action = string;
            export type Resource = string;
            export type Subresource = string;
        }
        export interface PathParameters {
            resource: Parameters.Resource;
            action: Parameters.Action;
            subresource: Parameters.Subresource;
        }
        namespace Responses {
            export type $200 = ArgoCD.AccountCanIResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace AccountServiceCreateToken {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = ArgoCD.AccountCreateTokenRequest;
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = ArgoCD.AccountCreateTokenResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace AccountServiceDeleteToken {
        namespace Parameters {
            export type Id = string;
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = ArgoCD.AccountEmptyResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace AccountServiceGetAccount {
        namespace Parameters {
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = ArgoCD.AccountAccount;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace AccountServiceListAccounts {
        namespace Responses {
            export type $200 = ArgoCD.AccountAccountsList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace AccountServiceUpdatePassword {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = ArgoCD.AccountUpdatePasswordRequest;
        }
        namespace Responses {
            export type $200 = ArgoCD.AccountUpdatePasswordResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceCreate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /**
             * Application is a definition of Application resource.
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applications,shortName=app;apps
             * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
             * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
             * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
             * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
             */
            ArgoCD.V1alpha1Application;
            export type Upsert = boolean;
            export type Validate = boolean;
        }
        export interface QueryParameters {
            upsert?: Parameters.Upsert;
            validate?: Parameters.Validate;
        }
        namespace Responses {
            export type $200 = /**
             * Application is a definition of Application resource.
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applications,shortName=app;apps
             * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
             * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
             * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
             * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
             */
            ArgoCD.V1alpha1Application;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceDelete {
        namespace Parameters {
            export type AppNamespace = string;
            export type Cascade = boolean;
            export type Name = string;
            export type Project = string;
            export type PropagationPolicy = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            cascade?: Parameters.Cascade;
            propagationPolicy?: Parameters.PropagationPolicy;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationApplicationResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceDeleteResource {
        namespace Parameters {
            export type AppNamespace = string;
            export type Force = boolean;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type Orphan = boolean;
            export type Project = string;
            export type ResourceName = string;
            export type Version = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            resourceName?: Parameters.ResourceName;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            force?: Parameters.Force;
            orphan?: Parameters.Orphan;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationApplicationResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceGet {
        namespace Parameters {
            /**
             * the application's namespace.
             */
            export type AppNamespace = string;
            /**
             * the auth sync filter.
             */
            export type AutoSyncEnabled = boolean;
            /**
             * the clusters filter.
             */
            export type Clusters = string[];
            /**
             * the health status filter.
             */
            export type HealthStatuses = string[];
            /**
             * limit.
             */
            export type Limit = string; // int64
            /**
             * the application name to end at (app with max name is included in response).
             */
            export type MaxName = string;
            /**
             * the application name to start from (app with min name is included in response).
             */
            export type MinName = string;
            /**
             * the application's name
             */
            export type Name = string;
            /**
             * the namespaces filter.
             */
            export type Namespaces = string[];
            /**
             * offset.
             */
            export type Offset = string; // int64
            /**
             * the project names to restrict returned list applications (legacy name for backwards-compatibility).
             */
            export type Project = string[];
            /**
             * the project names to restrict returned list applications.
             */
            export type Projects = string[];
            /**
             * forces application reconciliation if set to 'hard'.
             */
            export type Refresh = string;
            /**
             * the repoURL to restrict returned list applications.
             */
            export type Repo = string;
            /**
             * the repos filter.
             */
            export type Repos = string[];
            /**
             * when specified with a watch call, shows changes that occur after that particular version of a resource.
             */
            export type ResourceVersion = string;
            /**
             * search.
             */
            export type Search = string;
            /**
             * the selector to restrict returned list to applications only with matched labels.
             */
            export type Selector = string;
            /**
             * the sync status filter.
             */
            export type SyncStatuses = string[];
        }
        export interface PathParameters {
            name: /* the application's name */ Parameters.Name;
        }
        export interface QueryParameters {
            refresh?: /* forces application reconciliation if set to 'hard'. */ Parameters.Refresh;
            projects?: /* the project names to restrict returned list applications. */ Parameters.Projects;
            resourceVersion?: /* when specified with a watch call, shows changes that occur after that particular version of a resource. */ Parameters.ResourceVersion;
            selector?: /* the selector to restrict returned list to applications only with matched labels. */ Parameters.Selector;
            repo?: /* the repoURL to restrict returned list applications. */ Parameters.Repo;
            appNamespace?: /* the application's namespace. */ Parameters.AppNamespace;
            project?: /* the project names to restrict returned list applications (legacy name for backwards-compatibility). */ Parameters.Project;
            minName?: /* the application name to start from (app with min name is included in response). */ Parameters.MinName;
            maxName?: /* the application name to end at (app with max name is included in response). */ Parameters.MaxName;
            repos?: /* the repos filter. */ Parameters.Repos;
            clusters?: /* the clusters filter. */ Parameters.Clusters;
            namespaces?: /* the namespaces filter. */ Parameters.Namespaces;
            autoSyncEnabled?: /* the auth sync filter. */ Parameters.AutoSyncEnabled;
            syncStatuses?: /* the sync status filter. */ Parameters.SyncStatuses;
            healthStatuses?: /* the health status filter. */ Parameters.HealthStatuses;
            search?: /* search. */ Parameters.Search;
            offset?: /* offset. */ Parameters.Offset /* int64 */;
            limit?: /* limit. */ Parameters.Limit /* int64 */;
        }
        namespace Responses {
            export type $200 = /**
             * Application is a definition of Application resource.
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applications,shortName=app;apps
             * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
             * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
             * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
             * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
             */
            ArgoCD.V1alpha1Application;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceGetApplicationSyncWindows {
        namespace Parameters {
            export type AppNamespace = string;
            export type Name = string;
            export type Project = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationApplicationSyncWindowsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceGetManifests {
        namespace Parameters {
            export type AppNamespace = string;
            export type Name = string;
            export type Project = string;
            export type Revision = string;
            export type Revisions = string[];
            export type SourcePositions = string /* int64 */[];
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            revision?: Parameters.Revision;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
            sourcePositions?: Parameters.SourcePositions;
            revisions?: Parameters.Revisions;
        }
        namespace Responses {
            export type $200 = ArgoCD.RepositoryManifestResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceGetManifestsWithFiles {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = ArgoCD.ApplicationApplicationManifestQueryWithFilesWrapper;
        }
        namespace Responses {
            export type $200 = ArgoCD.RepositoryManifestResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceGetResource {
        namespace Parameters {
            export type AppNamespace = string;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type Project = string;
            export type ResourceName = string;
            export type Version = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            resourceName?: Parameters.ResourceName;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationApplicationResourceResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceList {
        namespace Parameters {
            /**
             * the application's namespace.
             */
            export type AppNamespace = string;
            /**
             * the auth sync filter.
             */
            export type AutoSyncEnabled = boolean;
            /**
             * the clusters filter.
             */
            export type Clusters = string[];
            /**
             * the health status filter.
             */
            export type HealthStatuses = string[];
            /**
             * limit.
             */
            export type Limit = string; // int64
            /**
             * the application name to end at (app with max name is included in response).
             */
            export type MaxName = string;
            /**
             * the application name to start from (app with min name is included in response).
             */
            export type MinName = string;
            /**
             * the application's name.
             */
            export type Name = string;
            /**
             * the namespaces filter.
             */
            export type Namespaces = string[];
            /**
             * offset.
             */
            export type Offset = string; // int64
            /**
             * the project names to restrict returned list applications (legacy name for backwards-compatibility).
             */
            export type Project = string[];
            /**
             * the project names to restrict returned list applications.
             */
            export type Projects = string[];
            /**
             * forces application reconciliation if set to 'hard'.
             */
            export type Refresh = string;
            /**
             * the repoURL to restrict returned list applications.
             */
            export type Repo = string;
            /**
             * the repos filter.
             */
            export type Repos = string[];
            /**
             * when specified with a watch call, shows changes that occur after that particular version of a resource.
             */
            export type ResourceVersion = string;
            /**
             * search.
             */
            export type Search = string;
            /**
             * the selector to restrict returned list to applications only with matched labels.
             */
            export type Selector = string;
            /**
             * the sync status filter.
             */
            export type SyncStatuses = string[];
        }
        export interface QueryParameters {
            name?: /* the application's name. */ Parameters.Name;
            refresh?: /* forces application reconciliation if set to 'hard'. */ Parameters.Refresh;
            projects?: /* the project names to restrict returned list applications. */ Parameters.Projects;
            resourceVersion?: /* when specified with a watch call, shows changes that occur after that particular version of a resource. */ Parameters.ResourceVersion;
            selector?: /* the selector to restrict returned list to applications only with matched labels. */ Parameters.Selector;
            repo?: /* the repoURL to restrict returned list applications. */ Parameters.Repo;
            appNamespace?: /* the application's namespace. */ Parameters.AppNamespace;
            project?: /* the project names to restrict returned list applications (legacy name for backwards-compatibility). */ Parameters.Project;
            minName?: /* the application name to start from (app with min name is included in response). */ Parameters.MinName;
            maxName?: /* the application name to end at (app with max name is included in response). */ Parameters.MaxName;
            repos?: /* the repos filter. */ Parameters.Repos;
            clusters?: /* the clusters filter. */ Parameters.Clusters;
            namespaces?: /* the namespaces filter. */ Parameters.Namespaces;
            autoSyncEnabled?: /* the auth sync filter. */ Parameters.AutoSyncEnabled;
            syncStatuses?: /* the sync status filter. */ Parameters.SyncStatuses;
            healthStatuses?: /* the health status filter. */ Parameters.HealthStatuses;
            search?: /* search. */ Parameters.Search;
            offset?: /* offset. */ Parameters.Offset /* int64 */;
            limit?: /* limit. */ Parameters.Limit /* int64 */;
        }
        namespace Responses {
            export type $200 = /**
             * ApplicationList is list of Application resources
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             */
            ArgoCD.V1alpha1ApplicationList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceListLinks {
        namespace Parameters {
            export type Name = string;
            export type Namespace = string;
            export type Project = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationLinksResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceListResourceActions {
        namespace Parameters {
            export type AppNamespace = string;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type Project = string;
            export type ResourceName = string;
            export type Version = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            resourceName?: Parameters.ResourceName;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationResourceActionsListResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceListResourceEvents {
        namespace Parameters {
            export type AppNamespace = string;
            export type Name = string;
            export type Project = string;
            export type ResourceName = string;
            export type ResourceNamespace = string;
            export type ResourceUID = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            resourceNamespace?: Parameters.ResourceNamespace;
            resourceName?: Parameters.ResourceName;
            resourceUID?: Parameters.ResourceUID;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = /* EventList is a list of events. */ ArgoCD.V1EventList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceListResourceLinks {
        namespace Parameters {
            export type AppNamespace = string;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type Project = string;
            export type ResourceName = string;
            export type Version = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            resourceName?: Parameters.ResourceName;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationLinksResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceManagedResources {
        namespace Parameters {
            export type AppNamespace = string;
            export type ApplicationName = string;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type Project = string;
            export type Version = string;
        }
        export interface PathParameters {
            applicationName: Parameters.ApplicationName;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            name?: Parameters.Name;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationManagedResourcesResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServicePatch {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* ApplicationPatchRequest is a request to patch an application */ ArgoCD.ApplicationApplicationPatchRequest;
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = /**
             * Application is a definition of Application resource.
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applications,shortName=app;apps
             * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
             * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
             * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
             * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
             */
            ArgoCD.V1alpha1Application;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServicePatchResource {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type AppNamespace = string;
            export type Body = string;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type PatchType = string;
            export type Project = string;
            export type ResourceName = string;
            export type Version = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            resourceName?: Parameters.ResourceName;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            patchType?: Parameters.PatchType;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationApplicationResourceResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServicePodLogs {
        namespace Parameters {
            export type AppNamespace = string;
            export type Container = string;
            export type Filter = string;
            export type Follow = boolean;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type PodName = string;
            export type Previous = boolean;
            export type Project = string;
            export type ResourceName = string;
            export type SinceSeconds = string; // int64
            /**
             * Non-negative fractions of a second at nanosecond resolution. Negative
             * second values with fractions must still have non-negative nanos values
             * that count forward in time. Must be from 0 to 999,999,999
             * inclusive. This field may be limited in precision depending on context.
             */
            export type SinceTimeNanos = number; // int32
            /**
             * Represents seconds of UTC time since Unix epoch
             * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
             * 9999-12-31T23:59:59Z inclusive.
             */
            export type SinceTimeSeconds = string; // int64
            export type TailLines = string; // int64
            export type UntilTime = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
            podName: Parameters.PodName;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            container?: Parameters.Container;
            sinceSeconds?: Parameters.SinceSeconds /* int64 */;
            "sinceTime.seconds"?: /**
             * Represents seconds of UTC time since Unix epoch
             * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
             * 9999-12-31T23:59:59Z inclusive.
             */
            Parameters.SinceTimeSeconds /* int64 */;
            "sinceTime.nanos"?: /**
             * Non-negative fractions of a second at nanosecond resolution. Negative
             * second values with fractions must still have non-negative nanos values
             * that count forward in time. Must be from 0 to 999,999,999
             * inclusive. This field may be limited in precision depending on context.
             */
            Parameters.SinceTimeNanos /* int32 */;
            tailLines?: Parameters.TailLines /* int64 */;
            follow?: Parameters.Follow;
            untilTime?: Parameters.UntilTime;
            filter?: Parameters.Filter;
            kind?: Parameters.Kind;
            group?: Parameters.Group;
            resourceName?: Parameters.ResourceName;
            previous?: Parameters.Previous;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            /**
             * Stream result of applicationLogEntry
             */
            export interface $200 {
                error?: ArgoCD.RuntimeStreamError;
                result?: ArgoCD.ApplicationLogEntry;
            }
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServicePodLogs2 {
        namespace Parameters {
            export type AppNamespace = string;
            export type Container = string;
            export type Filter = string;
            export type Follow = boolean;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type PodName = string;
            export type Previous = boolean;
            export type Project = string;
            export type ResourceName = string;
            export type SinceSeconds = string; // int64
            /**
             * Non-negative fractions of a second at nanosecond resolution. Negative
             * second values with fractions must still have non-negative nanos values
             * that count forward in time. Must be from 0 to 999,999,999
             * inclusive. This field may be limited in precision depending on context.
             */
            export type SinceTimeNanos = number; // int32
            /**
             * Represents seconds of UTC time since Unix epoch
             * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
             * 9999-12-31T23:59:59Z inclusive.
             */
            export type SinceTimeSeconds = string; // int64
            export type TailLines = string; // int64
            export type UntilTime = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            podName?: Parameters.PodName;
            container?: Parameters.Container;
            sinceSeconds?: Parameters.SinceSeconds /* int64 */;
            "sinceTime.seconds"?: /**
             * Represents seconds of UTC time since Unix epoch
             * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
             * 9999-12-31T23:59:59Z inclusive.
             */
            Parameters.SinceTimeSeconds /* int64 */;
            "sinceTime.nanos"?: /**
             * Non-negative fractions of a second at nanosecond resolution. Negative
             * second values with fractions must still have non-negative nanos values
             * that count forward in time. Must be from 0 to 999,999,999
             * inclusive. This field may be limited in precision depending on context.
             */
            Parameters.SinceTimeNanos /* int32 */;
            tailLines?: Parameters.TailLines /* int64 */;
            follow?: Parameters.Follow;
            untilTime?: Parameters.UntilTime;
            filter?: Parameters.Filter;
            kind?: Parameters.Kind;
            group?: Parameters.Group;
            resourceName?: Parameters.ResourceName;
            previous?: Parameters.Previous;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            /**
             * Stream result of applicationLogEntry
             */
            export interface $200 {
                error?: ArgoCD.RuntimeStreamError;
                result?: ArgoCD.ApplicationLogEntry;
            }
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceResourceTree {
        namespace Parameters {
            export type AppNamespace = string;
            export type ApplicationName = string;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type Project = string;
            export type Version = string;
        }
        export interface PathParameters {
            applicationName: Parameters.ApplicationName;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            name?: Parameters.Name;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = /**
             * ApplicationTree holds nodes which belongs to the application
             * TODO: describe purpose of this type
             */
            ArgoCD.V1alpha1ApplicationTree;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceRevisionChartDetails {
        namespace Parameters {
            /**
             * the application's namespace.
             */
            export type AppNamespace = string;
            /**
             * the application's name
             */
            export type Name = string;
            export type Project = string;
            /**
             * the revision of the app
             */
            export type Revision = string;
            /**
             * source index (for multi source apps).
             */
            export type SourceIndex = number; // int32
            /**
             * versionId from historical data (for multi source apps).
             */
            export type VersionId = number; // int32
        }
        export interface PathParameters {
            name: /* the application's name */ Parameters.Name;
            revision: /* the revision of the app */ Parameters.Revision;
        }
        export interface QueryParameters {
            appNamespace?: /* the application's namespace. */ Parameters.AppNamespace;
            project?: Parameters.Project;
            sourceIndex?: /* source index (for multi source apps). */ Parameters.SourceIndex /* int32 */;
            versionId?: /* versionId from historical data (for multi source apps). */ Parameters.VersionId /* int32 */;
        }
        namespace Responses {
            export type $200 = /* ChartDetails contains helm chart metadata for a specific version */ ArgoCD.V1alpha1ChartDetails;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceRevisionMetadata {
        namespace Parameters {
            /**
             * the application's namespace.
             */
            export type AppNamespace = string;
            /**
             * the application's name
             */
            export type Name = string;
            export type Project = string;
            /**
             * the revision of the app
             */
            export type Revision = string;
            /**
             * source index (for multi source apps).
             */
            export type SourceIndex = number; // int32
            /**
             * versionId from historical data (for multi source apps).
             */
            export type VersionId = number; // int32
        }
        export interface PathParameters {
            name: /* the application's name */ Parameters.Name;
            revision: /* the revision of the app */ Parameters.Revision;
        }
        export interface QueryParameters {
            appNamespace?: /* the application's namespace. */ Parameters.AppNamespace;
            project?: Parameters.Project;
            sourceIndex?: /* source index (for multi source apps). */ Parameters.SourceIndex /* int32 */;
            versionId?: /* versionId from historical data (for multi source apps). */ Parameters.VersionId /* int32 */;
        }
        namespace Responses {
            export type $200 = /* RevisionMetadata contains metadata for a specific revision in a Git repository */ ArgoCD.V1alpha1RevisionMetadata;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceRollback {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = ArgoCD.ApplicationApplicationRollbackRequest;
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = /**
             * Application is a definition of Application resource.
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applications,shortName=app;apps
             * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
             * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
             * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
             * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
             */
            ArgoCD.V1alpha1Application;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceRunResourceAction {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type AppNamespace = string;
            export type Body = string;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type Project = string;
            export type ResourceName = string;
            export type Version = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            resourceName?: Parameters.ResourceName;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationApplicationResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceSync {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* ApplicationSyncRequest is a request to apply the config state to live state */ ArgoCD.ApplicationApplicationSyncRequest;
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = /**
             * Application is a definition of Application resource.
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applications,shortName=app;apps
             * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
             * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
             * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
             * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
             */
            ArgoCD.V1alpha1Application;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceTerminateOperation {
        namespace Parameters {
            export type AppNamespace = string;
            export type Name = string;
            export type Project = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationOperationTerminateResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceUpdate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            /**
             * Name must be unique within a namespace. Is required when creating resources, although
             * some resources may allow a client to request the generation of an appropriate name
             * automatically. Name is primarily intended for creation idempotence and configuration
             * definition.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             * +optional
             */
            export type ApplicationMetadataName = string;
            export type Body = /**
             * Application is a definition of Application resource.
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applications,shortName=app;apps
             * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
             * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
             * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
             * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
             */
            ArgoCD.V1alpha1Application;
            export type Project = string;
            export type Validate = boolean;
        }
        export interface PathParameters {
            "application.metadata.name": /**
             * Name must be unique within a namespace. Is required when creating resources, although
             * some resources may allow a client to request the generation of an appropriate name
             * automatically. Name is primarily intended for creation idempotence and configuration
             * definition.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             * +optional
             */
            Parameters.ApplicationMetadataName;
        }
        export interface QueryParameters {
            validate?: Parameters.Validate;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = /**
             * Application is a definition of Application resource.
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applications,shortName=app;apps
             * +kubebuilder:printcolumn:name="Sync Status",type=string,JSONPath=`.status.sync.status`
             * +kubebuilder:printcolumn:name="Health Status",type=string,JSONPath=`.status.health.status`
             * +kubebuilder:printcolumn:name="Revision",type=string,JSONPath=`.status.sync.revision`,priority=10
             * +kubebuilder:printcolumn:name="Project",type=string,JSONPath=`.spec.project`,priority=10
             */
            ArgoCD.V1alpha1Application;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceUpdateSpec {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type AppNamespace = string;
            export type Body = /* ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision. */ ArgoCD.V1alpha1ApplicationSpec;
            export type Name = string;
            export type Project = string;
            export type Validate = boolean;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            validate?: Parameters.Validate;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            export type $200 = /* ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision. */ ArgoCD.V1alpha1ApplicationSpec;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceWatch {
        namespace Parameters {
            /**
             * the application's namespace.
             */
            export type AppNamespace = string;
            /**
             * the auth sync filter.
             */
            export type AutoSyncEnabled = boolean;
            /**
             * the clusters filter.
             */
            export type Clusters = string[];
            /**
             * the health status filter.
             */
            export type HealthStatuses = string[];
            /**
             * limit.
             */
            export type Limit = string; // int64
            /**
             * the application name to end at (app with max name is included in response).
             */
            export type MaxName = string;
            /**
             * the application name to start from (app with min name is included in response).
             */
            export type MinName = string;
            /**
             * the application's name.
             */
            export type Name = string;
            /**
             * the namespaces filter.
             */
            export type Namespaces = string[];
            /**
             * offset.
             */
            export type Offset = string; // int64
            /**
             * the project names to restrict returned list applications (legacy name for backwards-compatibility).
             */
            export type Project = string[];
            /**
             * the project names to restrict returned list applications.
             */
            export type Projects = string[];
            /**
             * forces application reconciliation if set to 'hard'.
             */
            export type Refresh = string;
            /**
             * the repoURL to restrict returned list applications.
             */
            export type Repo = string;
            /**
             * the repos filter.
             */
            export type Repos = string[];
            /**
             * when specified with a watch call, shows changes that occur after that particular version of a resource.
             */
            export type ResourceVersion = string;
            /**
             * search.
             */
            export type Search = string;
            /**
             * the selector to restrict returned list to applications only with matched labels.
             */
            export type Selector = string;
            /**
             * the sync status filter.
             */
            export type SyncStatuses = string[];
        }
        export interface QueryParameters {
            name?: /* the application's name. */ Parameters.Name;
            refresh?: /* forces application reconciliation if set to 'hard'. */ Parameters.Refresh;
            projects?: /* the project names to restrict returned list applications. */ Parameters.Projects;
            resourceVersion?: /* when specified with a watch call, shows changes that occur after that particular version of a resource. */ Parameters.ResourceVersion;
            selector?: /* the selector to restrict returned list to applications only with matched labels. */ Parameters.Selector;
            repo?: /* the repoURL to restrict returned list applications. */ Parameters.Repo;
            appNamespace?: /* the application's namespace. */ Parameters.AppNamespace;
            project?: /* the project names to restrict returned list applications (legacy name for backwards-compatibility). */ Parameters.Project;
            minName?: /* the application name to start from (app with min name is included in response). */ Parameters.MinName;
            maxName?: /* the application name to end at (app with max name is included in response). */ Parameters.MaxName;
            repos?: /* the repos filter. */ Parameters.Repos;
            clusters?: /* the clusters filter. */ Parameters.Clusters;
            namespaces?: /* the namespaces filter. */ Parameters.Namespaces;
            autoSyncEnabled?: /* the auth sync filter. */ Parameters.AutoSyncEnabled;
            syncStatuses?: /* the sync status filter. */ Parameters.SyncStatuses;
            healthStatuses?: /* the health status filter. */ Parameters.HealthStatuses;
            search?: /* search. */ Parameters.Search;
            offset?: /* offset. */ Parameters.Offset /* int64 */;
            limit?: /* limit. */ Parameters.Limit /* int64 */;
        }
        namespace Responses {
            /**
             * Stream result of v1alpha1ApplicationWatchEvent
             */
            export interface $200 {
                error?: ArgoCD.RuntimeStreamError;
                result?: /* ApplicationWatchEvent contains information about application change. */ ArgoCD.V1alpha1ApplicationWatchEvent;
            }
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationServiceWatchResourceTree {
        namespace Parameters {
            export type AppNamespace = string;
            export type ApplicationName = string;
            export type Group = string;
            export type Kind = string;
            export type Name = string;
            export type Namespace = string;
            export type Project = string;
            export type Version = string;
        }
        export interface PathParameters {
            applicationName: Parameters.ApplicationName;
        }
        export interface QueryParameters {
            namespace?: Parameters.Namespace;
            name?: Parameters.Name;
            version?: Parameters.Version;
            group?: Parameters.Group;
            kind?: Parameters.Kind;
            appNamespace?: Parameters.AppNamespace;
            project?: Parameters.Project;
        }
        namespace Responses {
            /**
             * Stream result of v1alpha1ApplicationTree
             */
            export interface $200 {
                error?: ArgoCD.RuntimeStreamError;
                result?: /**
                 * ApplicationTree holds nodes which belongs to the application
                 * TODO: describe purpose of this type
                 */
                ArgoCD.V1alpha1ApplicationTree;
            }
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationSetServiceCreate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /**
             * ApplicationSet is a set of Application resources
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applicationsets,shortName=appset;appsets
             * +kubebuilder:subresource:status
             */
            ArgoCD.V1alpha1ApplicationSet;
            export type DryRun = boolean;
            export type Upsert = boolean;
        }
        export interface QueryParameters {
            upsert?: Parameters.Upsert;
            dryRun?: Parameters.DryRun;
        }
        namespace Responses {
            export type $200 = /**
             * ApplicationSet is a set of Application resources
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applicationsets,shortName=appset;appsets
             * +kubebuilder:subresource:status
             */
            ArgoCD.V1alpha1ApplicationSet;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationSetServiceDelete {
        namespace Parameters {
            /**
             * The application set namespace. Default empty is argocd control plane namespace.
             */
            export type AppsetNamespace = string;
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            appsetNamespace?: /* The application set namespace. Default empty is argocd control plane namespace. */ Parameters.AppsetNamespace;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationsetApplicationSetResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationSetServiceGenerate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* ApplicationSetGetQuery is a query for applicationset resources */ ArgoCD.ApplicationsetApplicationSetGenerateRequest;
        }
        namespace Responses {
            export type $200 = /* ApplicationSetGenerateResponse is a response for applicationset generate request */ ArgoCD.ApplicationsetApplicationSetGenerateResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationSetServiceGet {
        namespace Parameters {
            /**
             * The application set namespace. Default empty is argocd control plane namespace.
             */
            export type AppsetNamespace = string;
            /**
             * the applicationsets's name
             */
            export type Name = string;
        }
        export interface PathParameters {
            name: /* the applicationsets's name */ Parameters.Name;
        }
        export interface QueryParameters {
            appsetNamespace?: /* The application set namespace. Default empty is argocd control plane namespace. */ Parameters.AppsetNamespace;
        }
        namespace Responses {
            export type $200 = /**
             * ApplicationSet is a set of Application resources
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=applicationsets,shortName=appset;appsets
             * +kubebuilder:subresource:status
             */
            ArgoCD.V1alpha1ApplicationSet;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationSetServiceList {
        namespace Parameters {
            /**
             * The application set namespace. Default empty is argocd control plane namespace.
             */
            export type AppsetNamespace = string;
            /**
             * the project names to restrict returned list applicationsets.
             */
            export type Projects = string[];
            /**
             * the selector to restrict returned list to applications only with matched labels.
             */
            export type Selector = string;
        }
        export interface QueryParameters {
            projects?: /* the project names to restrict returned list applicationsets. */ Parameters.Projects;
            selector?: /* the selector to restrict returned list to applications only with matched labels. */ Parameters.Selector;
            appsetNamespace?: /* The application set namespace. Default empty is argocd control plane namespace. */ Parameters.AppsetNamespace;
        }
        namespace Responses {
            export type $200 = /**
             * ApplicationSetList contains a list of ApplicationSet
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:object:root=true
             */
            ArgoCD.V1alpha1ApplicationSetList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ApplicationSetServiceResourceTree {
        namespace Parameters {
            /**
             * The application set namespace. Default empty is argocd control plane namespace.
             */
            export type AppsetNamespace = string;
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        export interface QueryParameters {
            appsetNamespace?: /* The application set namespace. Default empty is argocd control plane namespace. */ Parameters.AppsetNamespace;
        }
        namespace Responses {
            export type $200 = /**
             * ApplicationSetTree holds nodes which belongs to the application
             * Used to build a tree of an ApplicationSet and its children
             */
            ArgoCD.V1alpha1ApplicationSetTree;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace CertificateServiceCreateCertificate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* RepositoryCertificateList is a collection of RepositoryCertificates */ ArgoCD.V1alpha1RepositoryCertificateList;
            /**
             * Whether to upsert already existing certificates.
             */
            export type Upsert = boolean;
        }
        export interface QueryParameters {
            upsert?: /* Whether to upsert already existing certificates. */ Parameters.Upsert;
        }
        namespace Responses {
            export type $200 = /* RepositoryCertificateList is a collection of RepositoryCertificates */ ArgoCD.V1alpha1RepositoryCertificateList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace CertificateServiceDeleteCertificate {
        namespace Parameters {
            /**
             * The sub type of the certificate to match (protocol dependent, usually only used for ssh certs).
             */
            export type CertSubType = string;
            /**
             * The type of the certificate to match (ssh or https).
             */
            export type CertType = string;
            /**
             * A file-glob pattern (not regular expression) the host name has to match.
             */
            export type HostNamePattern = string;
        }
        export interface QueryParameters {
            hostNamePattern?: /* A file-glob pattern (not regular expression) the host name has to match. */ Parameters.HostNamePattern;
            certType?: /* The type of the certificate to match (ssh or https). */ Parameters.CertType;
            certSubType?: /* The sub type of the certificate to match (protocol dependent, usually only used for ssh certs). */ Parameters.CertSubType;
        }
        namespace Responses {
            export type $200 = /* RepositoryCertificateList is a collection of RepositoryCertificates */ ArgoCD.V1alpha1RepositoryCertificateList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace CertificateServiceListCertificates {
        namespace Parameters {
            /**
             * The sub type of the certificate to match (protocol dependent, usually only used for ssh certs).
             */
            export type CertSubType = string;
            /**
             * The type of the certificate to match (ssh or https).
             */
            export type CertType = string;
            /**
             * A file-glob pattern (not regular expression) the host name has to match.
             */
            export type HostNamePattern = string;
        }
        export interface QueryParameters {
            hostNamePattern?: /* A file-glob pattern (not regular expression) the host name has to match. */ Parameters.HostNamePattern;
            certType?: /* The type of the certificate to match (ssh or https). */ Parameters.CertType;
            certSubType?: /* The sub type of the certificate to match (protocol dependent, usually only used for ssh certs). */ Parameters.CertSubType;
        }
        namespace Responses {
            export type $200 = /* RepositoryCertificateList is a collection of RepositoryCertificates */ ArgoCD.V1alpha1RepositoryCertificateList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ClusterServiceCreate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Cluster is the definition of a cluster resource */ ArgoCD.V1alpha1Cluster;
            export type Upsert = boolean;
        }
        export interface QueryParameters {
            upsert?: Parameters.Upsert;
        }
        namespace Responses {
            export type $200 = /* Cluster is the definition of a cluster resource */ ArgoCD.V1alpha1Cluster;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ClusterServiceDelete {
        namespace Parameters {
            /**
             * type is the type of the specified cluster identifier ( "server" - default, "name" ).
             */
            export type IdType = string;
            /**
             * value holds the cluster server URL or cluster name
             */
            export type IdValue = string;
            export type Name = string;
            export type Server = string;
        }
        export interface PathParameters {
            "id.value": /* value holds the cluster server URL or cluster name */ Parameters.IdValue;
        }
        export interface QueryParameters {
            server?: Parameters.Server;
            name?: Parameters.Name;
            "id.type"?: /* type is the type of the specified cluster identifier ( "server" - default, "name" ). */ Parameters.IdType;
        }
        namespace Responses {
            export type $200 = ArgoCD.ClusterClusterResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ClusterServiceGet {
        namespace Parameters {
            /**
             * type is the type of the specified cluster identifier ( "server" - default, "name" ).
             */
            export type IdType = string;
            /**
             * value holds the cluster server URL or cluster name
             */
            export type IdValue = string;
            export type Name = string;
            export type Server = string;
        }
        export interface PathParameters {
            "id.value": /* value holds the cluster server URL or cluster name */ Parameters.IdValue;
        }
        export interface QueryParameters {
            server?: Parameters.Server;
            name?: Parameters.Name;
            "id.type"?: /* type is the type of the specified cluster identifier ( "server" - default, "name" ). */ Parameters.IdType;
        }
        namespace Responses {
            export type $200 = /* Cluster is the definition of a cluster resource */ ArgoCD.V1alpha1Cluster;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ClusterServiceInvalidateCache {
        namespace Parameters {
            /**
             * value holds the cluster server URL or cluster name
             */
            export type IdValue = string;
        }
        export interface PathParameters {
            "id.value": /* value holds the cluster server URL or cluster name */ Parameters.IdValue;
        }
        namespace Responses {
            export type $200 = /* Cluster is the definition of a cluster resource */ ArgoCD.V1alpha1Cluster;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ClusterServiceList {
        namespace Parameters {
            /**
             * type is the type of the specified cluster identifier ( "server" - default, "name" ).
             */
            export type IdType = string;
            /**
             * value holds the cluster server URL or cluster name.
             */
            export type IdValue = string;
            export type Name = string;
            export type Server = string;
        }
        export interface QueryParameters {
            server?: Parameters.Server;
            name?: Parameters.Name;
            "id.type"?: /* type is the type of the specified cluster identifier ( "server" - default, "name" ). */ Parameters.IdType;
            "id.value"?: /* value holds the cluster server URL or cluster name. */ Parameters.IdValue;
        }
        namespace Responses {
            export type $200 = /* ClusterList is a collection of Clusters. */ ArgoCD.V1alpha1ClusterList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ClusterServiceRotateAuth {
        namespace Parameters {
            /**
             * value holds the cluster server URL or cluster name
             */
            export type IdValue = string;
        }
        export interface PathParameters {
            "id.value": /* value holds the cluster server URL or cluster name */ Parameters.IdValue;
        }
        namespace Responses {
            export type $200 = ArgoCD.ClusterClusterResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ClusterServiceUpdate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Cluster is the definition of a cluster resource */ ArgoCD.V1alpha1Cluster;
            /**
             * type is the type of the specified cluster identifier ( "server" - default, "name" ).
             */
            export type IdType = string;
            /**
             * value holds the cluster server URL or cluster name
             */
            export type IdValue = string;
            export type UpdatedFields = string[];
        }
        export interface PathParameters {
            "id.value": /* value holds the cluster server URL or cluster name */ Parameters.IdValue;
        }
        export interface QueryParameters {
            updatedFields?: Parameters.UpdatedFields;
            "id.type"?: /* type is the type of the specified cluster identifier ( "server" - default, "name" ). */ Parameters.IdType;
        }
        namespace Responses {
            export type $200 = /* Cluster is the definition of a cluster resource */ ArgoCD.V1alpha1Cluster;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace GPGKeyServiceCreate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* GnuPGPublicKey is a representation of a GnuPG public key */ ArgoCD.V1alpha1GnuPGPublicKey;
            /**
             * Whether to upsert already existing public keys.
             */
            export type Upsert = boolean;
        }
        export interface QueryParameters {
            upsert?: /* Whether to upsert already existing public keys. */ Parameters.Upsert;
        }
        namespace Responses {
            export type $200 = /* Response to a public key creation request */ ArgoCD.GpgkeyGnuPGPublicKeyCreateResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace GPGKeyServiceDelete {
        namespace Parameters {
            /**
             * The GPG key ID to query for.
             */
            export type KeyID = string;
        }
        export interface QueryParameters {
            keyID?: /* The GPG key ID to query for. */ Parameters.KeyID;
        }
        namespace Responses {
            export type $200 = /* Generic (empty) response for GPG public key CRUD requests */ ArgoCD.GpgkeyGnuPGPublicKeyResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace GPGKeyServiceGet {
        namespace Parameters {
            /**
             * The GPG key ID to query for
             */
            export type KeyID = string;
        }
        export interface PathParameters {
            keyID: /* The GPG key ID to query for */ Parameters.KeyID;
        }
        namespace Responses {
            export type $200 = /* GnuPGPublicKey is a representation of a GnuPG public key */ ArgoCD.V1alpha1GnuPGPublicKey;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace GPGKeyServiceList {
        namespace Parameters {
            /**
             * The GPG key ID to query for.
             */
            export type KeyID = string;
        }
        export interface QueryParameters {
            keyID?: /* The GPG key ID to query for. */ Parameters.KeyID;
        }
        namespace Responses {
            export type $200 = /* GnuPGPublicKeyList is a collection of GnuPGPublicKey objects */ ArgoCD.V1alpha1GnuPGPublicKeyList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace NotificationServiceListServices {
        namespace Responses {
            export type $200 = ArgoCD.NotificationServiceList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace NotificationServiceListTemplates {
        namespace Responses {
            export type $200 = ArgoCD.NotificationTemplateList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace NotificationServiceListTriggers {
        namespace Responses {
            export type $200 = ArgoCD.NotificationTriggerList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceCreate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* ProjectCreateRequest defines project creation parameters. */ ArgoCD.ProjectProjectCreateRequest;
        }
        namespace Responses {
            export type $200 = /**
             * AppProject provides a logical grouping of applications, providing controls for:
             * * where the apps may deploy to (cluster whitelist)
             * * what may be deployed (repository whitelist, resource whitelist/blacklist)
             * * who can access these applications (roles, OIDC group claims bindings)
             * * and what they can do (RBAC policies)
             * * automation access to these roles (JWT tokens)
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
             */
            ArgoCD.V1alpha1AppProject;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceCreateToken {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* ProjectTokenCreateRequest defines project token creation parameters. */ ArgoCD.ProjectProjectTokenCreateRequest;
            export type Project = string;
            export type Role = string;
        }
        export interface PathParameters {
            project: Parameters.Project;
            role: Parameters.Role;
        }
        namespace Responses {
            export type $200 = /* ProjectTokenResponse wraps the created token or returns an empty string if deleted. */ ArgoCD.ProjectProjectTokenResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceDelete {
        namespace Parameters {
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = ArgoCD.ProjectEmptyResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceDeleteToken {
        namespace Parameters {
            export type Iat = string; // int64
            export type Id = string;
            export type Project = string;
            export type Role = string;
        }
        export interface PathParameters {
            project: Parameters.Project;
            role: Parameters.Role;
            iat: Parameters.Iat /* int64 */;
        }
        export interface QueryParameters {
            id?: Parameters.Id;
        }
        namespace Responses {
            export type $200 = ArgoCD.ProjectEmptyResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceGet {
        namespace Parameters {
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = /**
             * AppProject provides a logical grouping of applications, providing controls for:
             * * where the apps may deploy to (cluster whitelist)
             * * what may be deployed (repository whitelist, resource whitelist/blacklist)
             * * who can access these applications (roles, OIDC group claims bindings)
             * * and what they can do (RBAC policies)
             * * automation access to these roles (JWT tokens)
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
             */
            ArgoCD.V1alpha1AppProject;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceGetDetailedProject {
        namespace Parameters {
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = ArgoCD.ProjectDetailedProjectsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceGetGlobalProjects {
        namespace Parameters {
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = ArgoCD.ProjectGlobalProjectsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceGetSyncWindowsState {
        namespace Parameters {
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = ArgoCD.ProjectSyncWindowsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceList {
        namespace Parameters {
            export type Name = string;
        }
        export interface QueryParameters {
            name?: Parameters.Name;
        }
        namespace Responses {
            export type $200 = /**
             * AppProjectList is list of AppProject resources
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             */
            ArgoCD.V1alpha1AppProjectList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceListEvents {
        namespace Parameters {
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = /* EventList is a list of events. */ ArgoCD.V1EventList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceListLinks {
        namespace Parameters {
            export type Name = string;
        }
        export interface PathParameters {
            name: Parameters.Name;
        }
        namespace Responses {
            export type $200 = ArgoCD.ApplicationLinksResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace ProjectServiceUpdate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = ArgoCD.ProjectProjectUpdateRequest;
            /**
             * Name must be unique within a namespace. Is required when creating resources, although
             * some resources may allow a client to request the generation of an appropriate name
             * automatically. Name is primarily intended for creation idempotence and configuration
             * definition.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             * +optional
             */
            export type ProjectMetadataName = string;
        }
        export interface PathParameters {
            "project.metadata.name": /**
             * Name must be unique within a namespace. Is required when creating resources, although
             * some resources may allow a client to request the generation of an appropriate name
             * automatically. Name is primarily intended for creation idempotence and configuration
             * definition.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             * +optional
             */
            Parameters.ProjectMetadataName;
        }
        namespace Responses {
            export type $200 = /**
             * AppProject provides a logical grouping of applications, providing controls for:
             * * where the apps may deploy to (cluster whitelist)
             * * what may be deployed (repository whitelist, resource whitelist/blacklist)
             * * who can access these applications (roles, OIDC group claims bindings)
             * * and what they can do (RBAC policies)
             * * automation access to these roles (JWT tokens)
             * +genclient
             * +genclient:noStatus
             * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
             * +kubebuilder:resource:path=appprojects,shortName=appproj;appprojs
             */
            ArgoCD.V1alpha1AppProject;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepoCredsServiceCreateRepositoryCredentials {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* RepoCreds holds the definition for repository credentials */ ArgoCD.V1alpha1RepoCreds;
            /**
             * Whether to create in upsert mode.
             */
            export type Upsert = boolean;
        }
        export interface QueryParameters {
            upsert?: /* Whether to create in upsert mode. */ Parameters.Upsert;
        }
        namespace Responses {
            export type $200 = /* RepoCreds holds the definition for repository credentials */ ArgoCD.V1alpha1RepoCreds;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepoCredsServiceCreateWriteRepositoryCredentials {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* RepoCreds holds the definition for repository credentials */ ArgoCD.V1alpha1RepoCreds;
            /**
             * Whether to create in upsert mode.
             */
            export type Upsert = boolean;
        }
        export interface QueryParameters {
            upsert?: /* Whether to create in upsert mode. */ Parameters.Upsert;
        }
        namespace Responses {
            export type $200 = /* RepoCreds holds the definition for repository credentials */ ArgoCD.V1alpha1RepoCreds;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepoCredsServiceDeleteRepositoryCredentials {
        namespace Parameters {
            export type Url = string;
        }
        export interface PathParameters {
            url: Parameters.Url;
        }
        namespace Responses {
            export type $200 = /* RepoCredsResponse is a response to most repository credentials requests */ ArgoCD.RepocredsRepoCredsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepoCredsServiceDeleteWriteRepositoryCredentials {
        namespace Parameters {
            export type Url = string;
        }
        export interface PathParameters {
            url: Parameters.Url;
        }
        namespace Responses {
            export type $200 = /* RepoCredsResponse is a response to most repository credentials requests */ ArgoCD.RepocredsRepoCredsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepoCredsServiceListRepositoryCredentials {
        namespace Parameters {
            /**
             * Repo URL for query.
             */
            export type Url = string;
        }
        export interface QueryParameters {
            url?: /* Repo URL for query. */ Parameters.Url;
        }
        namespace Responses {
            export type $200 = /* RepositoryList is a collection of Repositories. */ ArgoCD.V1alpha1RepoCredsList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepoCredsServiceListWriteRepositoryCredentials {
        namespace Parameters {
            /**
             * Repo URL for query.
             */
            export type Url = string;
        }
        export interface QueryParameters {
            url?: /* Repo URL for query. */ Parameters.Url;
        }
        namespace Responses {
            export type $200 = /* RepositoryList is a collection of Repositories. */ ArgoCD.V1alpha1RepoCredsList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepoCredsServiceUpdateRepositoryCredentials {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* RepoCreds holds the definition for repository credentials */ ArgoCD.V1alpha1RepoCreds;
            /**
             * URL is the URL to which these credentials match
             */
            export type CredsUrl = string;
        }
        export interface PathParameters {
            "creds.url": /* URL is the URL to which these credentials match */ Parameters.CredsUrl;
        }
        namespace Responses {
            export type $200 = /* RepoCreds holds the definition for repository credentials */ ArgoCD.V1alpha1RepoCreds;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepoCredsServiceUpdateWriteRepositoryCredentials {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* RepoCreds holds the definition for repository credentials */ ArgoCD.V1alpha1RepoCreds;
            /**
             * URL is the URL to which these credentials match
             */
            export type CredsUrl = string;
        }
        export interface PathParameters {
            "creds.url": /* URL is the URL to which these credentials match */ Parameters.CredsUrl;
        }
        namespace Responses {
            export type $200 = /* RepoCreds holds the definition for repository credentials */ ArgoCD.V1alpha1RepoCreds;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceCreateRepository {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            /**
             * Whether to operate on credential set instead of repository.
             */
            export type CredsOnly = boolean;
            /**
             * Whether to create in upsert mode.
             */
            export type Upsert = boolean;
        }
        export interface QueryParameters {
            upsert?: /* Whether to create in upsert mode. */ Parameters.Upsert;
            credsOnly?: /* Whether to operate on credential set instead of repository. */ Parameters.CredsOnly;
        }
        namespace Responses {
            export type $200 = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceCreateWriteRepository {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            /**
             * Whether to operate on credential set instead of repository.
             */
            export type CredsOnly = boolean;
            /**
             * Whether to create in upsert mode.
             */
            export type Upsert = boolean;
        }
        export interface QueryParameters {
            upsert?: /* Whether to create in upsert mode. */ Parameters.Upsert;
            credsOnly?: /* Whether to operate on credential set instead of repository. */ Parameters.CredsOnly;
        }
        namespace Responses {
            export type $200 = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceDeleteRepository {
        namespace Parameters {
            /**
             * App project for query.
             */
            export type AppProject = string;
            /**
             * Whether to force a cache refresh on repo's connection state.
             */
            export type ForceRefresh = boolean;
            /**
             * Repo URL for query
             */
            export type Repo = string;
        }
        export interface PathParameters {
            repo: /* Repo URL for query */ Parameters.Repo;
        }
        export interface QueryParameters {
            forceRefresh?: /* Whether to force a cache refresh on repo's connection state. */ Parameters.ForceRefresh;
            appProject?: /* App project for query. */ Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = ArgoCD.RepositoryRepoResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceDeleteWriteRepository {
        namespace Parameters {
            /**
             * App project for query.
             */
            export type AppProject = string;
            /**
             * Whether to force a cache refresh on repo's connection state.
             */
            export type ForceRefresh = boolean;
            /**
             * Repo URL for query
             */
            export type Repo = string;
        }
        export interface PathParameters {
            repo: /* Repo URL for query */ Parameters.Repo;
        }
        export interface QueryParameters {
            forceRefresh?: /* Whether to force a cache refresh on repo's connection state. */ Parameters.ForceRefresh;
            appProject?: /* App project for query. */ Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = ArgoCD.RepositoryRepoResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceGet {
        namespace Parameters {
            /**
             * App project for query.
             */
            export type AppProject = string;
            /**
             * Whether to force a cache refresh on repo's connection state.
             */
            export type ForceRefresh = boolean;
            /**
             * Repo URL for query
             */
            export type Repo = string;
        }
        export interface PathParameters {
            repo: /* Repo URL for query */ Parameters.Repo;
        }
        export interface QueryParameters {
            forceRefresh?: /* Whether to force a cache refresh on repo's connection state. */ Parameters.ForceRefresh;
            appProject?: /* App project for query. */ Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceGetAppDetails {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* RepoAppDetailsQuery contains query information for app details request */ ArgoCD.RepositoryRepoAppDetailsQuery;
            /**
             * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
             */
            export type SourceRepoURL = string;
        }
        export interface PathParameters {
            "source.repoURL": /* RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */ Parameters.SourceRepoURL;
        }
        namespace Responses {
            export type $200 = /* RepoAppDetailsResponse application details */ ArgoCD.RepositoryRepoAppDetailsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceGetHelmCharts {
        namespace Parameters {
            /**
             * App project for query.
             */
            export type AppProject = string;
            /**
             * Whether to force a cache refresh on repo's connection state.
             */
            export type ForceRefresh = boolean;
            /**
             * Repo URL for query
             */
            export type Repo = string;
        }
        export interface PathParameters {
            repo: /* Repo URL for query */ Parameters.Repo;
        }
        export interface QueryParameters {
            forceRefresh?: /* Whether to force a cache refresh on repo's connection state. */ Parameters.ForceRefresh;
            appProject?: /* App project for query. */ Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = ArgoCD.RepositoryHelmChartsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceGetWrite {
        namespace Parameters {
            /**
             * App project for query.
             */
            export type AppProject = string;
            /**
             * Whether to force a cache refresh on repo's connection state.
             */
            export type ForceRefresh = boolean;
            /**
             * Repo URL for query
             */
            export type Repo = string;
        }
        export interface PathParameters {
            repo: /* Repo URL for query */ Parameters.Repo;
        }
        export interface QueryParameters {
            forceRefresh?: /* Whether to force a cache refresh on repo's connection state. */ Parameters.ForceRefresh;
            appProject?: /* App project for query. */ Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceListApps {
        namespace Parameters {
            export type AppName = string;
            export type AppProject = string;
            export type Repo = string;
            export type Revision = string;
        }
        export interface PathParameters {
            repo: Parameters.Repo;
        }
        export interface QueryParameters {
            revision?: Parameters.Revision;
            appName?: Parameters.AppName;
            appProject?: Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = /* RepoAppsResponse contains applications of specified repository */ ArgoCD.RepositoryRepoAppsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceListRefs {
        namespace Parameters {
            /**
             * App project for query.
             */
            export type AppProject = string;
            /**
             * Whether to force a cache refresh on repo's connection state.
             */
            export type ForceRefresh = boolean;
            /**
             * Repo URL for query
             */
            export type Repo = string;
        }
        export interface PathParameters {
            repo: /* Repo URL for query */ Parameters.Repo;
        }
        export interface QueryParameters {
            forceRefresh?: /* Whether to force a cache refresh on repo's connection state. */ Parameters.ForceRefresh;
            appProject?: /* App project for query. */ Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = /* A subset of the repository's named refs */ ArgoCD.RepositoryRefs;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceListRepositories {
        namespace Parameters {
            /**
             * App project for query.
             */
            export type AppProject = string;
            /**
             * Whether to force a cache refresh on repo's connection state.
             */
            export type ForceRefresh = boolean;
            /**
             * Repo URL for query.
             */
            export type Repo = string;
        }
        export interface QueryParameters {
            repo?: /* Repo URL for query. */ Parameters.Repo;
            forceRefresh?: /* Whether to force a cache refresh on repo's connection state. */ Parameters.ForceRefresh;
            appProject?: /* App project for query. */ Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = /* RepositoryList is a collection of Repositories. */ ArgoCD.V1alpha1RepositoryList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceListWriteRepositories {
        namespace Parameters {
            /**
             * App project for query.
             */
            export type AppProject = string;
            /**
             * Whether to force a cache refresh on repo's connection state.
             */
            export type ForceRefresh = boolean;
            /**
             * Repo URL for query.
             */
            export type Repo = string;
        }
        export interface QueryParameters {
            repo?: /* Repo URL for query. */ Parameters.Repo;
            forceRefresh?: /* Whether to force a cache refresh on repo's connection state. */ Parameters.ForceRefresh;
            appProject?: /* App project for query. */ Parameters.AppProject;
        }
        namespace Responses {
            export type $200 = /* RepositoryList is a collection of Repositories. */ ArgoCD.V1alpha1RepositoryList;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceUpdateRepository {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            /**
             * Repo contains the URL to the remote repository
             */
            export type RepoRepo = string;
        }
        export interface PathParameters {
            "repo.repo": /* Repo contains the URL to the remote repository */ Parameters.RepoRepo;
        }
        namespace Responses {
            export type $200 = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceUpdateWriteRepository {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            /**
             * Repo contains the URL to the remote repository
             */
            export type RepoRepo = string;
        }
        export interface PathParameters {
            "repo.repo": /* Repo contains the URL to the remote repository */ Parameters.RepoRepo;
        }
        namespace Responses {
            export type $200 = /* Repository is a repository holding application configurations */ ArgoCD.V1alpha1Repository;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceValidateAccess {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = string;
            /**
             * Whether helm-oci support should be enabled for this repo.
             */
            export type EnableOci = boolean;
            /**
             * Whether to force HTTP basic auth.
             */
            export type ForceHttpBasicAuth = boolean;
            /**
             * Google Cloud Platform service account key.
             */
            export type GcpServiceAccountKey = string;
            /**
             * Github App Enterprise base url if empty will default to https://api.github.com.
             */
            export type GithubAppEnterpriseBaseUrl = string;
            /**
             * Github App ID of the app used to access the repo.
             */
            export type GithubAppID = string; // int64
            /**
             * Github App Installation ID of the installed GitHub App.
             */
            export type GithubAppInstallationID = string; // int64
            /**
             * Github App Private Key PEM data.
             */
            export type GithubAppPrivateKey = string;
            /**
             * Whether to skip certificate or host key validation.
             */
            export type Insecure = boolean;
            /**
             * The name of the repo.
             */
            export type Name = string;
            /**
             * Password for accessing repo.
             */
            export type Password = string;
            /**
             * Reference between project and repository that allow you automatically to be added as item inside SourceRepos project entity.
             */
            export type Project = string;
            /**
             * HTTP/HTTPS proxy to access the repository.
             */
            export type Proxy = string;
            /**
             * The URL to the repo
             */
            export type Repo = string;
            /**
             * Private key data for accessing SSH repository.
             */
            export type SshPrivateKey = string;
            /**
             * TLS client cert data for accessing HTTPS repository.
             */
            export type TlsClientCertData = string;
            /**
             * TLS client cert key for accessing HTTPS repository.
             */
            export type TlsClientCertKey = string;
            /**
             * The type of the repo.
             */
            export type Type = string;
            /**
             * Username for accessing repo.
             */
            export type Username = string;
        }
        export interface PathParameters {
            repo: /* The URL to the repo */ Parameters.Repo;
        }
        export interface QueryParameters {
            username?: /* Username for accessing repo. */ Parameters.Username;
            password?: /* Password for accessing repo. */ Parameters.Password;
            sshPrivateKey?: /* Private key data for accessing SSH repository. */ Parameters.SshPrivateKey;
            insecure?: /* Whether to skip certificate or host key validation. */ Parameters.Insecure;
            tlsClientCertData?: /* TLS client cert data for accessing HTTPS repository. */ Parameters.TlsClientCertData;
            tlsClientCertKey?: /* TLS client cert key for accessing HTTPS repository. */ Parameters.TlsClientCertKey;
            type?: /* The type of the repo. */ Parameters.Type;
            name?: /* The name of the repo. */ Parameters.Name;
            enableOci?: /* Whether helm-oci support should be enabled for this repo. */ Parameters.EnableOci;
            githubAppPrivateKey?: /* Github App Private Key PEM data. */ Parameters.GithubAppPrivateKey;
            githubAppID?: /* Github App ID of the app used to access the repo. */ Parameters.GithubAppID /* int64 */;
            githubAppInstallationID?: /* Github App Installation ID of the installed GitHub App. */ Parameters.GithubAppInstallationID /* int64 */;
            githubAppEnterpriseBaseUrl?: /* Github App Enterprise base url if empty will default to https://api.github.com. */ Parameters.GithubAppEnterpriseBaseUrl;
            proxy?: /* HTTP/HTTPS proxy to access the repository. */ Parameters.Proxy;
            project?: /* Reference between project and repository that allow you automatically to be added as item inside SourceRepos project entity. */ Parameters.Project;
            gcpServiceAccountKey?: /* Google Cloud Platform service account key. */ Parameters.GcpServiceAccountKey;
            forceHttpBasicAuth?: /* Whether to force HTTP basic auth. */ Parameters.ForceHttpBasicAuth;
        }
        namespace Responses {
            export type $200 = ArgoCD.RepositoryRepoResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace RepositoryServiceValidateWriteAccess {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = string;
            /**
             * Whether helm-oci support should be enabled for this repo.
             */
            export type EnableOci = boolean;
            /**
             * Whether to force HTTP basic auth.
             */
            export type ForceHttpBasicAuth = boolean;
            /**
             * Google Cloud Platform service account key.
             */
            export type GcpServiceAccountKey = string;
            /**
             * Github App Enterprise base url if empty will default to https://api.github.com.
             */
            export type GithubAppEnterpriseBaseUrl = string;
            /**
             * Github App ID of the app used to access the repo.
             */
            export type GithubAppID = string; // int64
            /**
             * Github App Installation ID of the installed GitHub App.
             */
            export type GithubAppInstallationID = string; // int64
            /**
             * Github App Private Key PEM data.
             */
            export type GithubAppPrivateKey = string;
            /**
             * Whether to skip certificate or host key validation.
             */
            export type Insecure = boolean;
            /**
             * The name of the repo.
             */
            export type Name = string;
            /**
             * Password for accessing repo.
             */
            export type Password = string;
            /**
             * Reference between project and repository that allow you automatically to be added as item inside SourceRepos project entity.
             */
            export type Project = string;
            /**
             * HTTP/HTTPS proxy to access the repository.
             */
            export type Proxy = string;
            /**
             * The URL to the repo
             */
            export type Repo = string;
            /**
             * Private key data for accessing SSH repository.
             */
            export type SshPrivateKey = string;
            /**
             * TLS client cert data for accessing HTTPS repository.
             */
            export type TlsClientCertData = string;
            /**
             * TLS client cert key for accessing HTTPS repository.
             */
            export type TlsClientCertKey = string;
            /**
             * The type of the repo.
             */
            export type Type = string;
            /**
             * Username for accessing repo.
             */
            export type Username = string;
        }
        export interface PathParameters {
            repo: /* The URL to the repo */ Parameters.Repo;
        }
        export interface QueryParameters {
            username?: /* Username for accessing repo. */ Parameters.Username;
            password?: /* Password for accessing repo. */ Parameters.Password;
            sshPrivateKey?: /* Private key data for accessing SSH repository. */ Parameters.SshPrivateKey;
            insecure?: /* Whether to skip certificate or host key validation. */ Parameters.Insecure;
            tlsClientCertData?: /* TLS client cert data for accessing HTTPS repository. */ Parameters.TlsClientCertData;
            tlsClientCertKey?: /* TLS client cert key for accessing HTTPS repository. */ Parameters.TlsClientCertKey;
            type?: /* The type of the repo. */ Parameters.Type;
            name?: /* The name of the repo. */ Parameters.Name;
            enableOci?: /* Whether helm-oci support should be enabled for this repo. */ Parameters.EnableOci;
            githubAppPrivateKey?: /* Github App Private Key PEM data. */ Parameters.GithubAppPrivateKey;
            githubAppID?: /* Github App ID of the app used to access the repo. */ Parameters.GithubAppID /* int64 */;
            githubAppInstallationID?: /* Github App Installation ID of the installed GitHub App. */ Parameters.GithubAppInstallationID /* int64 */;
            githubAppEnterpriseBaseUrl?: /* Github App Enterprise base url if empty will default to https://api.github.com. */ Parameters.GithubAppEnterpriseBaseUrl;
            proxy?: /* HTTP/HTTPS proxy to access the repository. */ Parameters.Proxy;
            project?: /* Reference between project and repository that allow you automatically to be added as item inside SourceRepos project entity. */ Parameters.Project;
            gcpServiceAccountKey?: /* Google Cloud Platform service account key. */ Parameters.GcpServiceAccountKey;
            forceHttpBasicAuth?: /* Whether to force HTTP basic auth. */ Parameters.ForceHttpBasicAuth;
        }
        namespace Responses {
            export type $200 = ArgoCD.RepositoryRepoResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace SessionServiceCreate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* SessionCreateRequest is for logging in. */ ArgoCD.SessionSessionCreateRequest;
        }
        namespace Responses {
            export type $200 = /* SessionResponse wraps the created token or returns an empty string if deleted. */ ArgoCD.SessionSessionResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace SessionServiceDelete {
        namespace Responses {
            export type $200 = /* SessionResponse wraps the created token or returns an empty string if deleted. */ ArgoCD.SessionSessionResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace SessionServiceGetUserInfo {
        namespace Responses {
            export type $200 = /* The current user's userInfo info */ ArgoCD.SessionGetUserInfoResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace SettingsServiceGet {
        namespace Responses {
            export type $200 = ArgoCD.ClusterSettings;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace SettingsServiceGetPlugins {
        namespace Responses {
            export type $200 = ArgoCD.ClusterSettingsPluginsResponse;
            export type Default = ArgoCD.RuntimeError;
        }
    }
    namespace VersionServiceVersion {
        namespace Responses {
            export type $200 = /* VersionMessage represents version of the Argo CD API server */ ArgoCD.VersionVersionMessage;
            export type Default = ArgoCD.RuntimeError;
        }
    }
}
