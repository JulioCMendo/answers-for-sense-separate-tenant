import type { Assistant, Layout, Option } from './types';
const icons: Option[] = [
  "None",
  "Abc",
  "Abort",
  "Add",
  "Aggregation",
  "Alert",
  "AlignmentBottomOutline",
  "AlignmentHorizontalOutline",
  "AlignmentLeftOutline",
  "AlignmentRightOutline",
  "AlignmentTopOutline",
  "AlignmentVerticalOutline",
  "AlignCenter",
  "AlignLeft",
  "AlignObjectCenter",
  "AlignObjectLeft",
  "AlignObjectRight",
  "AlignRight",
  "All",
  "All2",
  "Analyze",
  "Application",
  "Approve",
  "ArrowDown",
  "ArrowDown2",
  "ArrowLeft",
  "ArrowLeftStop",
  "ArrowRight",
  "ArrowRightStop",
  "ArrowUp",
  "ArrowUp2",
  "Ascending",
  "Associate",
  "AssociationOutline",
  "Automation",
  "AutoLayout",
  "AutoLayoutOutline",
  "Axis",
  "Back",
  "BarsGrouped",
  "BarsGroupedHorizontal",
  "BarsGroupedHorizontalOutline",
  "BarsGroupedOutline",
  "BarsHorizontal",
  "BarsStacked",
  "BarsStackedHorizontal",
  "BarsStackedHorizontalOutline",
  "BarsStackedOutline",
  "BarsVertical",
  "BarChart",
  "BarChartHorizontal",
  "BarChartOutline",
  "Bell",
  "BellOutline",
  "Bin",
  "Binoculars",
  "BinOutline",
  "Bold",
  "Book",
  "Bookmark",
  "Bookmark2",
  "BookOutline",
  "Box",
  "Boxplot",
  "BoxOutline",
  "BreakAssociation",
  "Brushes",
  "Bubbles",
  "Building",
  "Bullet-list",
  "BulletChart",
  "BulletChartOutline",
  "BusinessLogic",
  "ButtonOutline",
  "Calendar",
  "Camera",
  "Catalog",
  "Chart",
  "ChartObject",
  "ChartObjectOutline",
  "Chat",
  "ChatOutline",
  "CheckboxIndetermined",
  "CheckboxTick",
  "Chevleft",
  "Chevright",
  "ClearFilter",
  "ClearFormatOutline",
  "ClearSelections",
  "Clipboard",
  "Clock",
  "Clock2",
  "Close",
  "Cloud",
  "CloudUpload",
  "Code",
  "CodeOutline",
  "Cognitive",
  "Cogwheel",
  "CogwheelOutline",
  "Collapse",
  "Collapse2",
  "Collapse3",
  "Collapse4",
  "Collapse5",
  "Collection",
  "Collection2",
  "Columns",
  "ColumnMove",
  "ColumnSize",
  "ComboChart",
  "ComboChartOutline",
  "Comment",
  "CommentOutline",
  "Compass",
  "Configuration",
  "Constraints",
  "Container",
  "Control",
  "ControlOutline",
  "Copy",
  "Corner",
  "CreditCard",
  "Cross",
  "Crosshair",
  "Cube",
  "CustomUi",
  "Cut",
  "Data-gateway",
  "Database",
  "DatabaseAdd",
  "DatabaseArrow",
  "DatabaseArrowOutline",
  "DatabaseOutline",
  "Dataset",
  "DataAssetOutline",
  "DataClass",
  "DataManager",
  "DataManagerOutline",
  "DataModel",
  "DataModelOutline",
  "Debug",
  "DebugOutline",
  "Default",
  "Descending",
  "DeselectAll",
  "Dimension",
  "Direction",
  "DirectionBottomOutline",
  "DirectionDownOutline",
  "DirectionLeft",
  "DirectionLeftRight",
  "DirectionRight",
  "DirectionTopOutline",
  "DirectionUpDown",
  "DirectionUpOutline",
  "DirectDiscovery",
  "Disconnect",
  "Dislike",
  "DislikeOutlined",
  "Distributionplot",
  "DistributionPlotOutline",
  "Dot",
  "Download",
  "DownloadSuccess",
  "Draggable",
  "DrillDown",
  "Drop",
  "DropdownArrow",
  "Duplicate",
  "DuplicateOutline",
  "DynamicObject",
  "DynamicView",
  "Edit",
  "EditChart",
  "EditList",
  "EditListOutline",
  "EditOutline",
  "Effects",
  "EffectsOutline",
  "Embed",
  "Engine",
  "EngineerOutline",
  "Evaluation",
  "Expand",
  "Expand2",
  "Experiment",
  "Explain",
  "Export",
  "Expression",
  "Field",
  "File",
  "FileSetup",
  "Filter",
  "Filter2",
  "Filterpane",
  "FilterpaneOutline",
  "Flag",
  "Flow",
  "Folder",
  "FolderOutline",
  "FolderQ",
  "Fort",
  "Forward",
  "From",
  "FullWidth",
  "Funnel",
  "GaugeChart",
  "GaugeChartOutline",
  "GaugeGauge",
  "GaugeVerticalBar",
  "GeneralDataClass",
  "GlobalSelector",
  "Globe",
  "Goto",
  "Grid",
  "GridChart",
  "GridChartOutline",
  "GridMenu",
  "GridMenuOutline",
  "GridOutline",
  "Group",
  "GroupOutline",
  "Hand",
  "Handle",
  "HandleHorizontal",
  "Help",
  "HelpOutline",
  "HighResolution",
  "Histogram",
  "HistogramOutline",
  "History",
  "Home",
  "Home2",
  "HomeRemove",
  "Hourglass",
  "HourglassOutline",
  "Hub-logo",
  "Idle",
  "IdleOutline",
  "Image",
  "ImageOutline",
  "ImpactAnalysis",
  "Import",
  "Inbox",
  "Indent",
  "Info",
  "InfoOutline",
  "Inline",
  "Insert",
  "InsertScriptOutline",
  "Italic",
  "Join",
  "Key",
  "KeyboardShortcut",
  "KeyDriverOutline",
  "KeyOutline",
  "Kpi",
  "KpiOutline",
  "Landing",
  "Lasso",
  "LayerOutline",
  "LayoutContainerOutline",
  "LeftRight",
  "Library",
  "License",
  "Lightbulb",
  "Lightbulb2",
  "Like",
  "LikeOutlined",
  "Lineage",
  "LineChart",
  "LineChartArea",
  "LineChartAreaOutline",
  "LineChartLine",
  "LineChartLineOutline",
  "LineObject",
  "Link",
  "LinkOutline",
  "List",
  "ListLoose",
  "Lock",
  "LockOutline",
  "LogIn",
  "LogOut",
  "LowResolution",
  "Mail",
  "Mail2",
  "Mail3",
  "Map",
  "MapOutline",
  "Marimekko",
  "Mashup",
  "Maximize",
  "Measure",
  "Megaphone",
  "Menu",
  "Microphone",
  "Minimize",
  "Minus",
  "Minus2",
  "MinusOutline",
  "ModelMetrics",
  "MonitorViewOutline",
  "More",
  "MoreRounded",
  "MoreVertical",
  "NaturalLanguageGeneration",
  "NetworkFolder",
  "NewFolder",
  "NewTab",
  "Next",
  "Note",
  "Number",
  "Numbered-list",
  "Object",
  "Objects",
  "Onboard",
  "Operation",
  "Operators",
  "Optimize",
  "OrgChart",
  "OrgChartOutline",
  "Palette",
  "PaletteOutline",
  "Pan",
  "Paperclip",
  "Paste",
  "Pause",
  "PauseOutline",
  "Person",
  "Phone",
  "PhoneAdd",
  "PhoneRemove",
  "PhotoLibrary",
  "PhotoLibraryOutline",
  "PieChart",
  "PieChartDonut",
  "PieChartDonutOutline",
  "PieChartOutline",
  "PieChartPie",
  "Pivot",
  "PivotTable",
  "PivotTableOutline",
  "Play",
  "Play2",
  "Play2Outline",
  "Plugin",
  "Plus",
  "PlusOutline",
  "PositionBottomCenter",
  "PositionBottomLeft",
  "PositionBottomRight",
  "PositionMiddleCenter",
  "PositionMiddleLeft",
  "PositionMiddleRight",
  "PositionTopCenter",
  "PositionTopLeft",
  "PositionTopRight",
  "Previous",
  "Print",
  "PrintOutline",
  "Processor",
  "Profile",
  "Project",
  "Proton",
  "Proxy",
  "ProxyOutline",
  "Publish",
  "PublishedToStream",
  "Puzzle",
  "PuzzleOutline",
  "RadialSelect",
  "RadiobuttonDot",
  "Rate",
  "Recovery",
  "Reload",
  "Remove",
  "RemoveOutline",
  "ReorderOutline",
  "Repair",
  "Replace",
  "ReportOutline",
  "Reset",
  "ResetOutline",
  "Resizer",
  "Restricted",
  "Return",
  "Rocket",
  "Rows",
  "RowMove",
  "RowSize",
  "Rule",
  "Rule2",
  "Run",
  "RunOutline",
  "RunScript",
  "Sankey",
  "Save",
  "ScaleRatio",
  "ScatterChart",
  "ScatterChartOutline",
  "Schedule",
  "Script",
  "ScriptOk",
  "Search",
  "SearchOutline",
  "Sections",
  "Selection",
  "SelectionsBack",
  "SelectionsForward",
  "SelectionsReload",
  "SelectionsTool",
  "SelectionSearch",
  "SelectAll",
  "SelectAlternative",
  "SelectExcluded",
  "SelectPossible",
  "Send",
  "SendOutline",
  "Server",
  "Settings",
  "Shapes",
  "ShapesOutline",
  "Share",
  "Sheet",
  "SheetOutline",
  "Shield",
  "Shop",
  "Shuffle",
  "SignPost",
  "Slider",
  "SlideshowOutline",
  "SlideShow",
  "Smiley",
  "Spaces",
  "SpaceData",
  "SpaceManaged",
  "SpaceManaged2",
  "SpaceShared",
  "Sparkle",
  "Split",
  "Star",
  "Star2",
  "StarSchema",
  "StepIn",
  "StepInOutline",
  "StepOver",
  "Stop",
  "StopOutline",
  "Stream",
  "StrenghtEmpty",
  "StrenghtHigh",
  "StrenghtLow",
  "StrenghtMedium",
  "Submit",
  "Success",
  "SuccessOutline",
  "Swap",
  "Sync",
  "TabbedContainerOutline",
  "Table",
  "TableAdd",
  "TableConnect",
  "TableEdit",
  "TableOk",
  "TableOutline",
  "TableSync",
  "Tag",
  "Tag2",
  "Target",
  "TaskChain",
  "Team",
  "Templates",
  "Text",
  "TextObject",
  "Tick",
  "ToggleBottom",
  "ToggleLeft",
  "ToggleRight",
  "ToggleTop",
  "Tooltip",
  "Top",
  "Touch",
  "Transfer",
  "Transform",
  "Treemap",
  "TreemapOutline",
  "TreeView",
  "TrellisChart",
  "TrendingDown",
  "TrendingNeutral",
  "TrendingUp",
  "TrendCompass",
  "TriangleBottom",
  "TriangleLeft",
  "TriangleRight",
  "TriangleTop",
  "Trophy",
  "Type",
  "Unapprove",
  "Undent",
  "Underline",
  "Uninstall",
  "Unlink",
  "UnlinkOutline",
  "Unlock",
  "UnlockOutline",
  "UnorderedList",
  "Unpublish",
  "Unsync",
  "Upload",
  "UpDown",
  "UserOutline",
  "Variables",
  "VariablesOutline",
  "Video",
  "VideoOutline",
  "View",
  "ViewDisabled",
  "ViewDisabledOutline",
  "ViewOutline",
  "Volume",
  "Warning",
  "Warning2",
  "WarningTriangle",
  "WarningTriangle2",
  "Waterfallchart",
  "WaterfallChartOutline",
  "Webhooks",
  "Widget",
  "ZoomIn",
  "ZoomInOutline",
  "ZoomOut",
  "ZoomOutOutline",
].map((icon: string) => ({
  value: icon,
  label: icon,
}));


export default function ext() {
  const getAssistants = async () => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const options = {
      method: 'GET',
      headers: headers,
    };
    let allAssistants: Option[] = [];
    const fetchPage = async (url: string) => {
      try {
        const response = await fetch(url, options);
        if (response.ok && response.status === 200) {
          const data = await response.json();
          allAssistants = allAssistants.concat(data.data.map((assistant: Assistant) => ({
            label: assistant.name,
            value: assistant.id,
          })));
          if (data.links.next && data.links.next.href) {
            await fetchPage(data.links.next.href);
          }
        } else {
          throw new Error('Failed to fetch assistants');
        }
      } catch (error) {
        throw error;
      }
    };
    try {
      await fetchPage('../api/v1/assistants');
      return allAssistants;
    } catch (error) {
      throw error;
    }
  };

  const assistantId = {
    component: "expression-with-dropdown",
    dropdownOnly: false,
    expressionType: "StringExpression",
    translation: "Assistant",
    ref: "props.assistantId",
    options: () => {
      return getAssistants();
    },
    defaultValue: "",
  };
  
  const assistantHelpText = {
    component: "text",
    translation: "When using a formula to define the assistant, you need to ensure you provide a valid assistant ID.",
    ref: "props.assistantHelpText",
  };

  const enableExtHost = {
    component: "switch",
    type: "boolean",
    ref: "props.enableExternalHost",
    translation: "Use Assistant hosted externally",
    defaultValue: false,
    options: [
      {
        value: true,
        translation: "properties.extHostOn",
      },
      {
        value: false,
        translation: "properties.extHostOff",
      },
    ],
  };

  const externalHostHelpText = {
    component: "text",
    translation: "Use this option only when the Qlik Answers Assistant is hosted on a separate Qlik Cloud Tenant.",
    ref: "props.externalHostHelpText",
  };

  const hostUrl = {
    component: "expression",
    ref: "props.hostUrl",
    expressionType: "StringExpression",
    translation: "Host URL",
    placeholder: "https://...",
    defaultValue: "",
  };

  const authMethod = {
    component: "dropdown",
    dropdownOnly: true,
    type: "string",
    ref: "props.authMethod",
    translation: "Authentication Method",
    defaultValue: "clientId",
    options: [
      { value: "clientId", label: "OAuth2 Client-ID" },
      { value: "webIntegrationId", label: "Web Integration ID" },
    ],
  };

  const clientId = {
    component: "expression",
    ref: "props.clientId",
    expressionType: "StringExpression",
    translation: "Client ID",
    defaultValue: "",
    show: (layout: Layout) => layout.props.authMethod === "clientId",
  };

  const webIntegrationId = {
    component: "expression",
    ref: "props.webIntegrationId",
    expressionType: "StringExpression",
    translation: "Web Integration ID",
    defaultValue: "",
    show: (layout: Layout) => layout.props.authMethod === "webIntegrationId",
  };

  const icon = {
    component: "dropdown",
    dropdownOnly: true,
    type: "string",
    translation: "Icon",
    ref: "props.icon",
    options: () => {
      return icons;
    },
    defaultValue: "ChatOutline",
  };

  const dialog = {
    type: "boolean",
    component: "switch",
    ref: "props.useDialog",
    translation: "Use dialog",
    defaultValue: false,
    options: [
      {
        value: true,
        translation: "properties.on",
      },
      {
        value: false,
        translation: "properties.off",
      },
    ],
  };

  const theme = {
    label: "Theme",
    component: "dropdown",
    dropdownOnly: true,
    type: "string",
    ref: "props.theme",
    defaultValue: "qlik-light",
    options: [
      { value: "qlik-light", label: "Light" },
      { value: "qlik-dark", label: "Dark" },
    ],
  };

  const iconSize = {
    type: "number",
    component: "slider",
    label: "Icon size",
    ref: "props.iconSize",
    min: 1,
    max: 100,
    step: 1,
    defaultValue: 80,
  }

  const iconColor = {
    component: "color-picker",
    type: "object",
    ref: "props.iconColor",
    translation: "Icon color",
    disableNone: false,
    dualOutput: true,
    defaultValue: {
      color: "#000000",
      index: "-1",
    },
    show: (layout: Layout) => {
      return layout.props.iconColor !== undefined;
    }
  }

  const iconPosition = {
    component: "position-grid",
    ref: "props.iconPosition",
    translation: "Icon position",
    defaultValue: "center-center",
  }

  const getStyleEditorDefinition = () => ({
    items: {
      dialogSection: {
        component: "panel-section",
        translation: "Dialog",
        items: {
          dialog,
        },
      },
      iconSection: {
        component: "panel-section",
        translation: "Icon",
        items: {
          icon,
          iconSize,
          iconColor,
          iconPosition,
        },
      },
      themeSection: {
        component: "panel-section",
        translation: "Theme",
        items: {
          theme,
        },
      },
    },
  });

  const getStylingPanelDefinition = () => ({
    type: "items",
    grouped: false,
    translation: "properties.presentation",
    items: {
      styleEditor: {
        component: "styling-panel",
        chartTitle: "Answers for Sense",
        translation: "LayerStyleEditor.component.styling",
        subtitle: "LayerStyleEditor.component.styling",
        ref: "components",
        useGeneral: true,
        useBackground: true,
        ...getStyleEditorDefinition(),
      },
    },
  });

  const settings = {
    component: "expandable-items",
    translation: "Common.Appearance",
    uses: "settings",
    items: {
      general: {
        type: "items",
        translation: "properties.general",
        items: {
          showTitles: {},
          disableNavMenu: {},
          showDetails: {},
          details: {
            show: false,
          },
          cellNavMenu: {
            show: false,
          },
        },
      },
      presentation: getStylingPanelDefinition(),
    },
  };

  const definition = {
    type: "items",
    component: "accordion",
    items: {
      settings,
      assistant: {
        grouped: true,
        type: "items",
        label: "Assistant",
        component: "items",
        items: {
          assistantId,
          assistantHelpText,
        },
      }
    },
  };

  const hostDefinition = {
    type: "items",
    component: "accordion",
    items: {
      externalHost: {
        grouped: true,
        type: "items",
        label: "External Host & Authentication",
        component: "items",
        items: {
          hostUrl,
          authMethod,
          clientId,
          webIntegrationId
        }
      }
    },
    show: (layout: Layout) => layout.props.enableExternalHost,
  }

  return {
    definition,
    enableExtHost,
    externalHostHelpText,
    hostDefinition,
    support: {
      snapshot: false,
      export: true,
      sharing: false,
      exportData: true,
      viewData: true,
    },
  };
}